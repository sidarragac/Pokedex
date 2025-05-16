FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .env.example .env

COPY . .

EXPOSE 8080
CMD [ "node", "src/index.js" ]