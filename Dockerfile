FROM node:11-alpine

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
ADD package*.json /app/
RUN npm install --pure-lockfile
ADD . /app

# Show current folder structure in logs
RUN ls -al -R

CMD ["npm", "run", "docker:start"]

