# Stage 1: build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./

# Copy everything else and build
COPY . .

RUN npm install --silent && npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with SPA-friendly one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Install curl for healthcheck and add Docker HEALTHCHECK
RUN apk add --no-cache curl

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
