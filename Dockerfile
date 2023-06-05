FROM node:16.8.0-slim

RUN mkdir /app

# Move app
WORKDIR /app
COPY . .

# Build App
RUN yarn && yarn build

# Expose :3000 port
EXPOSE 3000

# Start App
CMD yarn start