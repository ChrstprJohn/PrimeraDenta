# Primera Denta Monorepo

A modern monorepo setup for a dentist appointment application built with:

- **Frontend Apps**: React + Vite + Tailwind CSS
    - User Portal (`/apps/user`)
    - Admin Dashboard (`/apps/admin`)
    - Doctor Portal (`/apps/doctor`)
- **Backend**: Node.js + Express (`/backend/api`)

## Project Structure

```
primera-denta/
├── apps/
│   ├── user/          # User-facing frontend
│   ├── admin/         # Admin dashboard
│   └── doctor/        # Doctor portal
├── backend/
│   └── api/           # Express backend
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies for all packages
pnpm install
```

### Development

```bash
# Start all development servers
pnpm dev

# Or start individual apps
cd apps/user && pnpm dev
cd apps/admin && pnpm dev
cd apps/doctor && pnpm dev
cd backend/api && pnpm dev
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
cd apps/user && pnpm build
```

## Available Scripts

### Root Level

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all packages
- `pnpm preview` - Preview built apps
- `pnpm lint` - Lint all packages

## Frontend Ports

- User Portal: http://localhost:3001
- Admin Dashboard: http://localhost:3002
- Doctor Portal: http://localhost:3003

## Backend

- API: http://localhost:5000

## License

MIT
