# Greenjeeva Price Trends Dashboard

## Overview

This is a modern, data-driven dashboard application for Greenjeeva.com, an e-commerce platform specializing in nutraceutical products. The application provides transparent competitor price tracking and market trend analysis, helping users monitor price fluctuations across multiple products and competitors. The dashboard features interactive charts, product comparisons, and market insights presented in a professional, clean interface inspired by platforms like Rawbids.com and TradingView.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching

**UI Component System:**
- Shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives as the foundation for complex interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Recharts for data visualization and charting capabilities

**Design System:**
- Custom color scheme centered around green (#3CB371) to align with Greenjeeva branding
- Dark mode support with CSS custom properties for theme switching
- Responsive grid layouts using Tailwind's breakpoint system
- Hover and active state elevations for interactive feedback

**State Management:**
- React Query handles all asynchronous data fetching and caching
- Local component state using React hooks (useState, useEffect)
- No global state management library - keeps state close to where it's used

**Routing Structure:**
- `/` - Main dashboard with market overview and trends
- `/product/:id` - Individual product detail pages with historical price data
- `/products` - Product listing and search interface
- 404 handling for undefined routes

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the API server
- Development and production mode configurations
- Custom middleware for request logging and JSON parsing
- Raw body preservation for webhook processing

**Data Layer:**
- In-memory storage implementation (MemStorage class) for development
- Interface-based storage abstraction (IStorage) allowing easy swap to database
- Designed for PostgreSQL integration via Drizzle ORM

**API Design:**
- RESTful API endpoints prefixed with `/api`
- CRUD operations abstracted through storage interface
- Session management ready with express-session infrastructure
- CORS and credential handling configured for secure cookie-based auth

**Development Tools:**
- Hot module replacement (HMR) via Vite middleware in development
- Custom error overlay for runtime errors
- Structured logging with timestamps and source tracking
- TypeScript strict mode for compile-time safety

### Data Storage Solutions

**Database Schema (Drizzle ORM):**
- Users table with UUID primary keys, username/password authentication
- Product data types defined in shared schema for type consistency across client/server
- Prepared for PostgreSQL with Neon serverless adapter
- Migration system configured via drizzle-kit

**Data Models:**
- `Product`: Contains product details, pricing history, competitor data, and market position
- `PriceDataPoint`: Time-series price data with date and price fields
- `CompetitorPrices`: Normalized structure for tracking multiple competitor price histories
- `MarketInsight`: Aggregated market statistics and trend analysis

**Type Safety:**
- Shared TypeScript types between client and server
- Zod schemas for runtime validation using drizzle-zod
- Type inference from database schema to ensure consistency

### External Dependencies

**UI Component Libraries:**
- @radix-ui/* family for accessible, unstyled component primitives (dialogs, dropdowns, popovers, etc.)
- cmdk for command palette functionality
- embla-carousel-react for image carousels
- recharts for chart rendering and data visualization
- lucide-react for consistent iconography

**Development Services:**
- Replit-specific plugins for development environment integration
- Vite plugins for cartographer, dev banner, and error modals
- PostCSS with Tailwind and Autoprefixer for CSS processing

**Data Fetching:**
- @tanstack/react-query for declarative data fetching and caching
- Built-in fetch API for HTTP requests
- Custom query client with optimized defaults (no refetch on window focus, infinite stale time)

**Form Handling:**
- react-hook-form for performant form state management
- @hookform/resolvers for schema validation integration
- Zod for schema definition and validation

**Database & ORM:**
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- connect-pg-simple for session storage (when database is connected)

**Utility Libraries:**
- date-fns for date manipulation and formatting
- clsx and tailwind-merge (via cn utility) for conditional className composition
- class-variance-authority for component variant management
- nanoid for unique ID generation

**Build Tools:**
- esbuild for fast server-side bundling
- tsx for TypeScript execution in development
- TypeScript compiler for type checking