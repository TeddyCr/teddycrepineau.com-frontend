FROM node:latest

ADD . /app

WORKDIR /app
RUN npm install

ADD ./start.sh /start.sh

RUN chmod +x /start.sh