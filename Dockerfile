FROM node:hydrogen-buster-slim

LABEL author="gnwncpta"
LABEL github="https://github.com/gnwncpta"

WORKDIR /app

COPY ./ /app

RUN ls -la
RUN npm install
RUN npm run build

EXPOSE 3000
ENTRYPOINT npm start