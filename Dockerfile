FROM node:14.20.1-slim

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