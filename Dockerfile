FROM node:alpine

COPY ./ ./

RUN [ "npm", "install" ]

RUN [ "npm", "run", "build:prod" ]

EXPOSE 8081

CMD [ "npm", "start" ]
