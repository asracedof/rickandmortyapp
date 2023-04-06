# Rick and Morty App

Esta aplicación web utiliza React y la API de Rick and Morty para mostrar información de los personajes y permitir al usuario agregarlos o eliminarlos de una lista personalizada.

#####
# Instalación

Para instalar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu computadora:

    ### `git clone url`

2. Accede a la carpeta del proyecto:

    ### `cd nombreCarpeta`

3. Instala las dependencias del proyecto con npm:

    ### `npm install`

4. Inicia la aplicación en modo de desarrollo:

    ### `npm start`

Esto abrirá la aplicación en tu navegador en la dirección <http://localhost:3000>.


# Uso

La aplicación tiene las siguientes páginas:

* Login: página de inicio de sesión para ingresar a la aplicación.

* Home: página principal donde se muestran los personajes agregados por el usuario y se pueden agregar más personajes utilizando la barra de búsqueda.

* About: página con información sobre la aplicación y los desarrolladores.

* Detail: página con información detallada de un personaje específico seleccionado por el usuario.

* Error: página de error para rutas no encontradas.

En la página de Home, el usuario puede buscar personajes ingresando su ID en la barra de búsqueda. Si el personaje se encuentra en la API de Rick and Morty, se agregará a la lista de personajes del usuario. Si ya existe en la lista, se mostrará un mensaje de alerta. Si no se encuentra en la API, se mostrará un mensaje de alerta indicando que no existe en ese universo.

En la lista de personajes, el usuario puede eliminar un personaje haciendo clic en el botón de cerrar.


# Créditos

Esta aplicación fue desarrollada como proyecto del M2 para el curso de React de Henry por Arlet Racedo. Utiliza la API de Rick and Morty.