# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN yarn install 

# add app
COPY . .

# Uses port which is used by the actual application
EXPOSE 8080

# start app
CMD ["yarn", "start"]