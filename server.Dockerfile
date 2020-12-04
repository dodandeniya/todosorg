
FROM node:15.3.0

RUN npm install -g nodemon

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --only=prod
RUN mkdir -p /app/server && cp -a /tmp/node_modules /app/server/

WORKDIR /app/server
COPY dist/apps/server/ /app/server

EXPOSE 3333

CMD [ "nodemon", "main.js" ]