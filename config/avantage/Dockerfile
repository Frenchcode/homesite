FROM node:19.4

ENV HOST='0.0.0.0'
ENV PORT='3000'
ENV NODE_ENV='production'

WORKDIR /var/www/html/sunday

#RUN rm -rf node_modules

COPY ./sunday/package*.json ./

RUN yarn install

COPY ./sunday .

RUN yarn build

RUN yarn cache clean --force

EXPOSE 3000

CMD ["yarn", "build"]
