FROM nginx:alpine

COPY ./nginx/client/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

WORKDIR /usr/share/nginx/html
COPY ./dist/apps/mytodos-app /usr/share/nginx/html