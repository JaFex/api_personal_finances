FROM node:12.19

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD [ "npm", "start" ]