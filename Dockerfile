FROM node:20-alpine

WORKDIR /app

# Copier et installer les dépendances du frontend
COPY frontend/package*.json ./
RUN npm install

# Copier le code source et builder
COPY frontend ./
RUN npm run build

EXPOSE 3000

CMD ["npx", "-y", "serve", "-s", "dist", "-l", "3000"]
