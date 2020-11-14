FROM node:12.19-alpine


RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 1337

CMD [ "npm", "start" ]