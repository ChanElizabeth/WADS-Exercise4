FROM node:13.10-alpine3.10 AS build

# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# RUN npm install -g @angular/cli@9.0.6

# COPY . /usr/src/app

# CMD ng serve --host 0.0.0.0 --port 4200

### STAGE 1: Build ###
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g @angular/cli@9.0.6
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/login /usr/share/nginx/html