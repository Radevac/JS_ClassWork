# backend/Dockerfile
FROM node:14
WORKDIR /app
COPY ./src /app/src
WORKDIR /app/src
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
