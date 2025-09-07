# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation blog built with TanStack Start and Fumadocs, featuring:
- TanStack Router for file-based routing
- Fumadocs for MDX-based documentation
- Tailwind CSS v4 for styling
- TypeScript throughout
- Vite as build tool

## Development Commands

```bash
# Start development server (runs on port 3000)
npm run dev
# or
pnpm dev

# Build for production (includes TypeScript check)
npm run build

# Start production server
npm run start
```

## Architecture

### Core Framework Stack
- **TanStack Start**: Full-stack React framework with server functions
- **TanStack Router**: File-based routing with type-safe navigation
- **Fumadocs**: Documentation framework with MDX support
- **React 19**: Latest React with concurrent features

### Directory Structure
- `src/routes/`: File-based routing (TanStack Router convention)
  - `__root.tsx`: Root layout with providers and HTML structure
  - `index.tsx`: Home page
  - `docs/$.tsx`: Catch-all route for documentation pages
  - `api/search.ts`: Search API endpoint
- `src/lib/`: Shared utilities
  - `source.ts`: Fumadocs source configuration
  - `layout.shared.tsx`: Layout options
- `src/components/`: Reusable components
- `content/`: MDX documentation files
- `source.config.ts`: Fumadocs configuration

### Key Features
- **Server Functions**: Uses `createServerFn` for data fetching
- **MDX Runtime**: Dynamic MDX loading with `createClientLoader`
- **Type Safety**: Full TypeScript with strict mode
- **Icon System**: Lucide icons integrated with Fumadocs
- **Prerendering**: Enabled via TanStack Start plugin

### Generated Files (Do Not Edit)
- `src/routeTree.gen.ts`: Auto-generated route tree
- `source.generated.ts`: Auto-generated Fumadocs source

### Import Aliases
- `@/*`: Maps to `src/*` directory

### Content Management
- Documentation content lives in `content/` directory as MDX files
- Fumadocs automatically processes and generates navigation
- Icons can be specified in frontmatter and are rendered as SVG