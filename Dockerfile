# base image https://hub.docker.com/_/node/
FROM node:13.3.0-alpine
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.4.0 -g
# start app
CMD ["npm", "start"]
