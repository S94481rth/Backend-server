# Base image
FROM node:alpine

# Working Dir
WORKDIR /usr/src/app

#copy files
COPY package*.json ./

# Installing packages
RUN npm install

# Copy the application code
COPY . .

# Exposing port
EXPOSE 3000

# Running the application
CMD node server.js


