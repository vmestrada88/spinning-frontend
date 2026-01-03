# Stage 1 — Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package manifests and install dependencies (cache-friendly)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2 — Runner (serve the built SPA with nginx)
FROM nginx:stable-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with one suited for SPAs
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
