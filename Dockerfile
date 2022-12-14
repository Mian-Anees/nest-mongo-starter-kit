FROM node:lts-alpine
ENV NODE_ENV=developmnent
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --developmnent --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm","run","start:dev"]