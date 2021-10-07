FROM node:alpine

WORKDIR /app

COPY package*.jasn ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]