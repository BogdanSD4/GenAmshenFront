FROM node:20.12-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as prod
COPY ./certs/genamshen.com /etc/nginx/genamshen.com
COPY nginx/nginx.prod.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

FROM node:alpine AS app-dev
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM nginx:alpine as dev
COPY nginx/nginx.dev.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
