import os
import requests
from bs4 import BeautifulSoup

# URL de la página principal
base_url = "https://sites.google.com/oao.iau.org/iauoaonews/national-pages/"

# Función para obtener el nombre del país y el continente
def obtener_paises():
    # URL de la página que contiene el listado de países y continentes
    url = "https://sites.google.com/oao.iau.org/iauoaonews/national-pages"
    
    # Realizamos la solicitud HTTP
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Estructura para guardar la información final
    datos_json = {}

    # Encontramos todos los elementos <span> con la clase "C9DxTc" (continente)
    continentes = soup.find_all('span', class_='C9DxTc')

    for continente in continentes:
        nombre_continente = continente.get_text(strip=True)
        paises = []
        
        # Buscamos los <p> que contienen el nombre de los países
        pais_elements = continente.find_next('div').find_all('p', dir='ltr')
        
        for pais_element in pais_elements:
            nombre_pais = pais_element.get_text(strip=True)
            url_pais = pais_element.find('a')['href']
            paises.append({'name': nombre_pais, 'url': base_url + url_pais})
        
        # Añadimos los países al continente correspondiente
        datos_json[nombre_continente] = paises
    
    return datos_json

# Función para obtener la imagen del país
def obtener_imagen(pais_url, pais_nombre):
    response = requests.get(pais_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Buscar la imagen dentro de <div class="t3iYD">
    img_element = soup.find('div', class_='t3iYD').find('img')
    img_url = img_element['src']
    
    # Descargar la imagen
    response = requests.get(img_url)
    
    # Crear directorio para guardar la imagen
    folder = f"images/nocs/{pais_nombre.replace(' ', '_')}"
    os.makedirs(folder, exist_ok=True)
    
    # Guardar la imagen con el nombre del país
    img_path = os.path.join(folder, f"{pais_nombre.replace(' ', '_')}.jpg")
    with open(img_path, 'wb') as img_file:
        img_file.write(response.content)
    
    return img_path

# Función principal
def main():
    # Obtenemos los datos de los países y continentes
    paises_data = obtener_paises()
    
    # Iterar sobre los países para obtener las imágenes
    for continente, paises in paises_data.items():
        for pais in paises:
            pais_nombre = pais['name']
            url_pais = pais['url']
            print(f"Descargando imagen para {pais_nombre}...")
            img_path = obtener_imagen(url_pais, pais_nombre)
            pais['urlimage'] = img_path

    # Mostrar el JSON final con la información
    import json
    print(json.dumps(paises_data, indent=4))

# Ejecutar el programa
if __name__ == "__main__":
    main()
