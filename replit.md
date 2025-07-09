# Design Bureau Website

## Overview

This is a modern full-stack web application for a design bureau (architectural and interior design company) built with React, Express, TypeScript, and PostgreSQL. The application features a responsive single-page website with sections for company information, projects portfolio, career opportunities, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Express sessions with PostgreSQL store

### Design System
- **Typography**: Custom Tektur font for headings, Inter for body text
- **Color Scheme**: Neutral-based palette with CSS custom properties
- **Components**: Consistent design system using shadcn/ui components
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Key Components

### Frontend Components
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Hero Section**: Full-screen background with minimal overlay
- **Company Info**: Services showcase with icon-based cards
- **About Section**: Company history and team information
- **Projects Portfolio**: Grid-based project showcase with images
- **Career Section**: Job listings and company benefits
- **Contact Form**: Validated form with toast notifications
- **Footer**: Company contact information and social links

### Backend Components
- **Contact API**: POST/GET endpoints for form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Detailed API request logging middleware
- **Static File Serving**: Development and production asset serving

### Database Schema
- **Users Table**: User authentication (prepared for future use)
- **Contact Submissions**: Form submission storage with timestamps
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

## Data Flow

1. **User Interaction**: User navigates through single-page application
2. **Form Submission**: Contact form data validated client-side with Zod
3. **API Request**: Form data sent to `/api/contact` endpoint
4. **Server Validation**: Request validated against shared schema
5. **Database Storage**: Contact submission stored in PostgreSQL
6. **Response**: Success/error response sent back to client
7. **UI Update**: Toast notification shown to user

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **tailwindcss**: CSS framework

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server for frontend with HMR
- **Backend**: tsx for TypeScript execution with nodemon-like behavior
- **Database**: Neon Database with connection pooling
- **Assets**: Static file serving through Vite middleware

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `drizzle-kit push`
- **Environment**: NODE_ENV=production with optimized builds

### Configuration
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Build Scripts**: Separate build processes for frontend and backend
- **Asset Paths**: Resolved aliases for clean imports (@/, @shared)

The application uses a modern monorepo structure with shared TypeScript types and schemas between frontend and backend, enabling type safety across the entire stack. The design is optimized for a design bureau's needs with portfolio showcase, contact capabilities, and professional presentation.