# Frontend de la Aplicación de Créditos "La Red"

Este es el frontend para la aplicación de gestión de créditos "La Red". La aplicación permite administrar clientes, negocios, pagos y usuarios del sistema.

## Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

*   **React:** Biblioteca para construir interfaces de usuario.
*   **Vite:** Herramienta de desarrollo para proyectos de frontend modernos.
*   **Material-UI (MUI):** Framework de componentes de UI para React.
*   **React Router:** Para la navegación y el enrutamiento en la aplicación.
*   **Axios:** Cliente HTTP para realizar peticiones a la API.
*   **Formik:** Para la gestión de formularios.
*   **Yup:** Para la validación de esquemas de datos.
*   **JWT Decode:** Para decodificar tokens de autenticación JWT.

## Pasos para Ejecutar el Proyecto

Sigue estos pasos para levantar el entorno de desarrollo local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/John-Elith/Frontend-LaRed.git
    cd creditos-lared-frontend
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias necesarias:
    ```bash
    npm install
    ```

3.  **Configurar las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las variables de entorno necesarias. Por ejemplo:
    ```
    VITE_API_URL=http://localhost:3000/api
    ```

4.  **Ejecutar el servidor de desarrollo:**
    Una vez instaladas las dependencias, puedes iniciar la aplicación con:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes scripts:

*   `npm run dev`: Inicia el servidor de desarrollo.
*   `npm run build`: Compila la aplicación para producción.
*   `npm run lint`: Ejecuta el linter para revisar el código.
*   `npm run preview`: Sirve la aplicación compilada localmente.