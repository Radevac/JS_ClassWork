FROM node:latest

RUN apt update && apt upgrade -y && \
    apt install -y mc  && \
    apt clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./src /app

RUN npm install

CMD ["npm", "run", "start"]