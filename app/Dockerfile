FROM node:16

WORKDIR /todo-list-client

COPY package*.json .

RUN npm install

ENV PORT 3000

COPY . .

CMD [ "npm", "start" ]