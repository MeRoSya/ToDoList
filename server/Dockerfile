FROM node

WORKDIR /todo-list-server

COPY package*.json ./

RUN npm install

ENV PORT 8080

COPY . .

CMD [ "npm", "start" ]
