FROM node:alpine

COPY ./ ./

ENV PORT=${PORT}

RUN [ "npm", "install" ]

RUN [ "npm", "run", "build:prod" ]

CMD [ "npm", "start" ]
