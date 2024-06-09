FROM node:18-alpine

WORKDIR /app

COPY services/resume-service/package.json .

RUN npm i

COPY services/resume-service/src ./src

COPY .env tsconfig.json ./

RUN npm run build