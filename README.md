# MOVIEMATE

1. **Clona el repositorio**
	```bash
	git clone <url-del-repo>
	cd movie-app
	```

2. **Instala las dependencias**
	```bash
	npm install
	```

3. **Configura las variables de entorno**
	- Crea un archivo `.env` y añade tu clave de TMDB:
	  ```env
	  VITE_TMDB_ACCESS_TOKEN=tu_token_aqui
	  ```

4. **Inicia la app en modo desarrollo**
	```bash
	npm run dev
	```

5. **Abre la app en tu navegador**
	- Ve a [http://localhost:5173](http://localhost:5173) o la URL que indique la terminal.

Nota: El backend está configurado para recibir el localHost5173, cualquier otro puerto puede dar problemas.