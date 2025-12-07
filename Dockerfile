# syntax=docker/dockerfile:1

# Build stage: Alibaba Cloud Linux 3 Node image
FROM alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/node:20.16 AS build
WORKDIR /app

# Install dependencies first to leverage cache
COPY package*.json ./
RUN chmod -R u+w /app \
    && npm install --ignore-engines --unsafe-perm

# Build the app
COPY . .
RUN npm run build

# Runtime stage: Alibaba Cloud Linux 3 optimized Nginx
FROM alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/nginx_optimized:20240221-1.20.1-2.3.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
