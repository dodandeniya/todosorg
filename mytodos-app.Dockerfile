FROM nginx:alpine

COPY ./nginx/client/default.conf /etc/nginx/conf.d/default.conf
EXPOSE $PORT

WORKDIR /usr/share/nginx/html
COPY ./dist/apps/mytodos-app /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'