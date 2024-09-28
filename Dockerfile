FROM node:20.12-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as prod
ENV CERT_NAME='genamshen'
ENV CERTS_PATH=/etc/nginx

COPY ./.certs /tmp/certs

RUN mv /tmp/certs/${CERT_NAME}.crt ${CERTS_PATH}/${CERT_NAME}.crt && \
    mv /tmp/certs/${CERT_NAME}.key ${CERTS_PATH}/${CERT_NAME}.key

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
