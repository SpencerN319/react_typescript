FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./public ./public

COPY ./src ./src

COPY ./tsconfig.json ./

EXPOSE 3000

CMD ["npm", "start"]
