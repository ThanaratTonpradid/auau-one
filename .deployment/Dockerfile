FROM node:latest as build-stage
ENV TZ=Asia/Bangkok
WORKDIR /app
COPY yarn.lock package.json /src/
RUN cd /src && npm install && mv node_modules /app/
COPY . /app
RUN npm run build

FROM nginx as production-stage
ENV TZ=Asia/Bangkok
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY .deployment/nginx/nginx.conf /etc/nginx/nginx.conf