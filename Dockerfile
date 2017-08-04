FROM node:6.11.2-slim

RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev libkrb5-dev vim -y && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]