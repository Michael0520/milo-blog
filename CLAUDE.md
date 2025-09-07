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

### Article Ordering Convention
- Use numerical prefixes in filenames for chronological ordering: `01-article.mdx`, `02-article.mdx`
- URLs remain clean: `/backend/01-jwt.mdx` → `/docs/backend/01-jwt` 
- Navigation titles come from frontmatter `title` field, not filename
- New articles should increment the number (newest articles at the bottom)
- Example: `backend/01-jwt.mdx`, `backend/02-encode.mdx`

### Git Commit Policy
- Don't use Claude Code default commit messages
- Follow structured commit message format below

#### Commit Message Standards

**New Articles/Pages:**
```bash
# Format: feat(section): add [topic] article
feat(backend): add JWT authentication mechanism article
feat(frontend): add React hooks optimization guide  
feat(leetcode): add binary tree traversal solutions
```

**Content Updates:**
```bash
# Format: content(section): update [specific change]
content(backend): update JWT examples with new security practices
content(backend): add code examples to encode/decode article
content(backend): fix typos in authentication flow
```

**Other Common Cases:**
```bash
# Architecture/Configuration changes
chore: update article ordering system with numeric prefixes
config: add new Fumadocs components import

# Fixes
fix(content): correct broken links in navigation
fix(backend): resolve code syntax highlighting issues

# Refactoring
refactor: reorganize content structure and navigation
```