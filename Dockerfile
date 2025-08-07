FROM node:22.12.0-alpine

WORKDIR /app

COPY package*.json ./

COPY pnpm-lock.yaml ./

RUN npm i -g pnpm@10.14.0

RUN pnpm install

COPY . .

EXPOSE 5173

CMD [ "sh", "-c", "pnpm generate && pnpm dev" ]