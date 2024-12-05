FROM node:16-alpine

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala Ionic y Angular CLI globalmente
RUN npm install -g @angular/cli @ionic/cli

# Copia el resto del proyecto
COPY . .

# Expone el puerto 8100 para Ionic
EXPOSE 8100

# Comando para iniciar el servidor de desarrollo
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100"]
