---
description: Repository Information Overview
alwaysApply: true
---

# Landing Seed Round (rest-express) Information

## Summary
A full-stack TypeScript application featuring an Express.js backend and a React frontend built with Vite. The project uses Drizzle ORM for database interactions and shares schemas between client and server.

## Structure
- **client/**: Frontend React application (Vite).
- **server/**: Backend Express application.
- **shared/**: Shared code (schemas, types) between client and server.
- **script/**: Build scripts.
- **dist/**: Production build output (generated).

## Language & Runtime
**Language**: TypeScript (v5.6.3)
**Runtime**: Node.js
**Build System**: Vite (Frontend), esbuild (Backend)
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- **Backend**: `express`, `ws`, `pg`, `drizzle-orm`, `passport`, `zod`
- **Frontend**: `react`, `react-dom`, `wouter`, `@tanstack/react-query`, `tailwindcss`, `@radix-ui/*`, `framer-motion`

**Development Dependencies**:
- `vite`, `typescript`, `tsx`, `drizzle-kit`, `esbuild`

## Build & Installation
```bash
# Install dependencies
npm install

# Development
npm run dev          # Run server in dev mode
npm run dev:client   # Run client in dev mode (usually handled by server in dev)

# Build
npm run build        # Builds both client and server to dist/

# Production Start
npm run start        # Runs the production build (dist/index.cjs)

# Database
npm run db:push      # Push schema changes to database
```

## Docker
No Docker configuration found.

## Testing
No testing framework or configuration found.
