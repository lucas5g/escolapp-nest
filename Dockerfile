# Base image
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm run build 
RUN npx prisma generate

# Bundle app source
COPY . .

# Start the server using the production build
CMD [ "npm", "run", "start" ]

# Exposing server port
EXPOSE 8000