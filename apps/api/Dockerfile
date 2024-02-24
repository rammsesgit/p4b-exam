FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
# Set working directory
WORKDIR /app
COPY . .
RUN pnpm dlx turbo prune api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app
# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install
# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN pnpm turbo build --filter=api...

FROM base AS runner
WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nestjs
RUN adduser --system --uid 1001 nestjs
USER nestjs
COPY --from=installer /app .
CMD node apps/api/dist/main.js
