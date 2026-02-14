# Prawali - Eco-Friendly Rice Husk Products Website

## Overview

Prawali is a startup website for an eco-friendly rice husk products brand. It serves as a lead generation platform with a public-facing product showcase and an admin dashboard for managing leads. The site features a chat widget for collecting visitor information and Vapi AI voice integration for conversational lead capture. The core business focus is on two regions: Punjab and Bihar, India.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: Wouter (lightweight alternative to React Router)
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (eco-green color palette)
- **Animations**: Framer Motion for page transitions and UI animations
- **Forms**: React Hook Form with Zod resolvers for validation
- **Fonts**: DM Sans (body) and Outfit (headings)

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (compiled via tsx)
- **Storage**: Currently uses in-memory storage (`MemStorage` class in `server/storage.ts`). The schema is defined with Drizzle ORM targeting PostgreSQL, but the active storage implementation is in-memory. When a database is provisioned, switch the storage implementation to use Drizzle with PostgreSQL.
- **API Pattern**: REST API with routes defined in `shared/routes.ts` as a typed contract object, giving both frontend and backend access to path definitions and Zod schemas

### Database Schema
- **leads** table: `id` (serial PK), `name` (text), `phone` (varchar 15), `location` (text - "Punjab" or "Bihar"), `source` (text - "web" or "voice"), `createdAt` (timestamp)
- Schema defined in `shared/schema.ts` using Drizzle ORM with `drizzle-zod` for insert validation schemas
- Database migrations managed via `drizzle-kit push` (`npm run db:push`)

### Key Pages
- `/` - Home page with Hero, Product Gallery, Founder's Vision, Footer, and floating ChatWidget
- `/admin-prawali` - Admin dashboard (password-protected on frontend with "admin123") showing lead table with search and filtering

### Shared Code
- `shared/schema.ts` - Database schema and Zod validation types shared between frontend and backend
- `shared/routes.ts` - API route definitions with paths, methods, and response schemas

### Build System
- Development: `npm run dev` runs tsx to execute `server/index.ts`, which sets up Vite dev server middleware for HMR
- Production: `npm run build` uses a custom build script (`script/build.ts`) that runs Vite build for the client and esbuild for the server, outputting to `dist/`
- Path aliases: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### API Endpoints
- `POST /api/leads` - Create a new lead (name, phone, location, source)
- `GET /api/leads` - List all leads (no auth on backend; frontend gates with simple password)

## External Dependencies

### Third-Party Services
- **Vapi AI**: Voice AI assistant integration for conversational lead capture
  - Public Key: `c19b7909-74f0-459f-a23c-ff4cf3d9cbe6`
  - Assistant ID: `517b20fd-d5b4-40b6-a9f8-57f6d1580f1c`
  - SDK loaded via CDN script in `index.html` and managed through `use-vapi.ts` hook

### Database
- **PostgreSQL**: Required when `DATABASE_URL` environment variable is set. Drizzle ORM is configured for PostgreSQL dialect. The app currently falls back to in-memory storage, but the schema is ready for PostgreSQL.
- **connect-pg-simple**: Listed as dependency for session storage (not yet actively used)

### Key npm Packages
- `drizzle-orm` + `drizzle-zod` + `drizzle-kit` for database ORM and schema validation
- `express` v5 for HTTP server
- `@tanstack/react-query` for frontend data fetching
- `framer-motion` for animations
- `react-hook-form` + `@hookform/resolvers` for form handling
- `wouter` for client-side routing
- `date-fns` for date formatting
- Full shadcn/ui component set (Radix UI primitives)
- `recharts` for charts (available but not prominently used yet)