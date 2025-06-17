# Base image
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Build the app
RUN npx prisma generate
RUN npm run build


# Expose port
EXPOSE 8000

# Start the server
CMD [ "npm", "run", "start" ]
