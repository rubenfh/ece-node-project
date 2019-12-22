FROM node:boron
WORKDIR /usr/src
COPY package.json /usr/src
RUN npm install
COPY . /usr/src
EXPOSE 8080
CMD ["npm","start"]