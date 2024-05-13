# Utilise l'image Node.js officielle comme image parent
FROM node:20.11.1 as build

# Définit le répertoire de travail
WORKDIR /app

# Copie le fichier package.json pour installer les dépendances
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Exécute la commande de build de l'application Angular
RUN npm run build --prod

# Utilise une image Nginx plus légère pour servir l'application Angular
FROM nginx:alpine

# Copie les fichiers build de l'application Angular dans le répertoire de Nginx
COPY --from=build /app/dist/faika /usr/share/nginx/html

# Expose le port 80
EXPOSE 83

# Démarre le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
