FROM node:14

WORKDIR /

RUN yarn install --production=true

COPY . .

EXPOSE 8080

CMD [ "node", "--experimental-modules", "app.mjs" ]