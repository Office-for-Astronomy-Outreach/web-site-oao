from rembg import remove
from PIL import Image
import io

# Cargar la imagen
input_path = "public/images/nocs/Afghanistan/oao-afgnanistan.jpg"  # Ruta de tu imagen original
output_path = "public/images/nocs/Afghanistan/oao-afghanistan.png"  # Ruta donde guardarás la imagen sin fondo

# Abrir la imagen y eliminar el fondo
with open(input_path, "rb") as input_file:
    input_data = input_file.read()
    output_data = remove(input_data)

# Guardar la imagen resultante
output_image = Image.open(io.BytesIO(output_data))
output_image.save(output_path)

print(f"Imagen sin fondo guardada en: {output_path}")
