FROM node:16-alpine as build-step
    RUN mkdir -p /app/
    WORKDIR /app/
    COPY package* /app/
    RUN npm install
    COPY . /app/
    RUN npm run build

FROM nginx:alpine
    COPY --from=build-step /app/dist/medlux-library/ /usr/share/nginx/html/
    COPY /nginx.conf  /etc/nginx/conf.d/default.conf
    EXPOSE 80
