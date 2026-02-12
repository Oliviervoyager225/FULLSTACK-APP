FROM node:20-alpine

WORKDIR /app

# Copier et installer les dépendances du frontend
COPY frontend/package*.json ./
RUN npm install

# Copier le code source et builder
COPY frontend ./
RUN npm run build

# Exposer le port et servir le build
EXPOSE 3000
CMD ["sh", "-c", "npx serve -s dist -l $PORT"]
