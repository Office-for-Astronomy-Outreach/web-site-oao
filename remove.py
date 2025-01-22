import os
import shutil

def rename_and_save_image(input_path, new_name_with_extension):
    # Obtener el directorio donde está la imagen original
    directory = os.path.dirname(input_path)
    
    # Crear la ruta de salida con el nuevo nombre
    output_path = os.path.join(directory, new_name_with_extension)
    
    # Renombrar el archivo manteniéndolo en el mismo directorio
    shutil.copy(input_path, output_path)
    print(f"Imagen renombrada y guardada en: {output_path}")

# Ejemplo de uso
input_path = "public/images/nocs/Australia/image_02.jpg"
new_name_with_extension = "oao-australia.png"

rename_and_save_image(input_path, new_name_with_extension)
