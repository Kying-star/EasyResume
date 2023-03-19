FROM node:16.19.1

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm@6.14.0
RUN pnpm install

RUN pnpm install esbuild@0.17.12 --save-dev

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]