FROM node:16.19.1


# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml 文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN npm install -g pnpm && pnpm install

# 复制项目文件
COPY . .

# 构建应用
RUN pnpm run build

# 设置环境变量
ENV NODE_ENV production

# 暴露端口
EXPOSE 4173

# 启动应用
CMD ["npm", "run", "preview"]