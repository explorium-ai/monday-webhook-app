FROM node:17.7.2-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .
RUN npm install

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "node","server.js" ]