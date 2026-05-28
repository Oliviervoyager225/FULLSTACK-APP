FROM node:20-alpine

WORKDIR /app

# Copier et installer les dépendances du frontend
COPY frontend/package*.json ./
RUN npm install

# Copier le code source et builder l'application
COPY frontend ./
RUN npm run build

# Copier le script d'entrée et le rendre exécutable
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

# Exposer le port et définir le point d'entrée
EXPOSE 3000
ENTRYPOINT ["/app/entrypoint.sh"]
