import requests
from bs4 import BeautifulSoup
import json
import os

main_url = "https://sites.google.com/oao.iau.org/iauoaonews/national-pages"
base_image_folder = "public/images/nocs"

def download_image(image_url, folder, filename):
    try:
        os.makedirs(folder, exist_ok=True)
        response = requests.get(image_url, stream=True)
        if response.status_code == 200:
            image_path = os.path.join(folder, filename)
            with open(image_path, "wb") as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            return image_path
        else:
            print(f"Error al descargar la imagen: {image_url}")
    except Exception as e:
        print(f"Error: {e} al descargar {image_url}")
    return None

def extract_country_data(country_url, country_name):
    try:
        response = requests.get(country_url)
        if response.status_code != 200:
            print(f"Error al acceder a {country_url}: {response.status_code}")
            return None

        soup = BeautifulSoup(response.content, "html.parser")
        main_role_div = soup.find("div", role="main")
        if not main_role_div:
            print(f"No se encontró 'role=main' en {country_url}")
            return {"images": [], "info": []}

        images = []
        image_tags = main_role_div.find_all("img", class_="CENy8b")
        for idx, img_tag in enumerate(image_tags):
            img_url = img_tag.get("src")
            if img_url:
                img_url = requests.compat.urljoin(country_url, img_url)
                folder_path = os.path.join(base_image_folder, country_name)
                filename = f"image_{idx + 1}.jpg"
                download_image(img_url, folder_path, filename)
                images.append(os.path.join(folder_path, filename))

        info = []
        ul_elements = main_role_div.find_all("ul")
        for ul in ul_elements:
            li_texts = [li.get_text(strip=True) for li in ul.find_all("li")]
            if li_texts:
                info.append({"ul": li_texts})

        return {"images": images, "info": info}

    except Exception as e:
        print(f"Error procesando {country_url}: {e}")
        return None

def main():
    response = requests.get(main_url)
    if response.status_code != 200:
        print(f"Error al acceder a la página principal: {response.status_code}")
        return

    print(f"Entro a la página principal")
    soup = BeautifulSoup(response.content, "html.parser")
    target_divs = soup.find_all("div", class_="LkDMRd")
    if not target_divs:
        print("No se encontraron divs con la clase especificada.")
        return

    countries_data = []

    for div in target_divs:
        h1 = div.find(class_="C9DxTc") 
        if h1:
            group_name = h1.get_text(strip=True)
            print(f"Procesando grupo: {group_name}")
            links = div.find_all("a", href=True)
            countries = []

            for link in links:
                country_name = link.get_text(strip=True)
                country_url = link["href"]
                print(f"Procesando país: {country_name} ({country_url})")

                country_data = extract_country_data(country_url, country_name)
                if country_data:
                    countries.append({
                        "name": country_name,
                        "url": country_url,
                        "images": country_data["images"],
                        "info": country_data["info"]
                    })

            countries_data.append({"group": group_name, "countries": countries})

    with open("countries_data.json", "w", encoding="utf-8") as file:
        json.dump(countries_data, file, indent=4, ensure_ascii=False)

    print("Datos extraídos y guardados en 'countries_data.json'.")

if __name__ == "__main__":
    main()
