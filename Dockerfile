# deps
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm i -g pnpm@10.14.0 && pnpm install --frozen-lockfile

# build
FROM deps AS build
WORKDIR /app
COPY . .
RUN pnpm build

# runtime
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app
EXPOSE 3000
CMD ["pnpm","start"]
