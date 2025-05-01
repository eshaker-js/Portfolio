# Builder
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

# Runner
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/data ./data
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]