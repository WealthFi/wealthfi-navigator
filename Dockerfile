# Stage 1: build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./

# Copy everything else and build
COPY . .

RUN npm ci --silent && npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with SPA-friendly one
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
