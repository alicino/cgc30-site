# Portal Institucional

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/alicino-m/cgc30-build)

A production-ready fullstack application built on Cloudflare Workers and Pages. Features a modern React frontend with shadcn/ui components, Tailwind CSS, API routes powered by Hono, and seamless deployment to Cloudflare's global edge network.

## Features

- **React 18 + Vite**: Fast development server and optimized builds.
- **shadcn/ui Components**: Beautiful, accessible UI primitives with Tailwind CSS.
- **Dark/Light Theme**: Automatic theme detection with persistence.
- **API Routes**: Type-safe Hono backend for serverless APIs.
- **React Query**: Data fetching, caching, and synchronization.
- **Error Handling**: Client and server-side error boundaries and reporting.
- **Responsive Design**: Mobile-first with Tailwind and sidebar layout.
- **Cloudflare Optimized**: Workers for APIs, Pages for assets, one-click deploy.
- **TypeScript**: Full type safety across frontend and backend.

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, React Router, React Query, Framer Motion, Sonner |
| **Backend** | Hono, Cloudflare Workers |
| **Utilities** | Zod (validation), Immer (state), clsx/twMerge (styling), uuid |
| **Dev Tools** | Bun, ESLint, TypeScript ESLint |

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended package manager)
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/installation/)
- Node.js 18+ (for some dev dependencies)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portal-institucional-8kc5coz2yebhjxntfo1ij
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. (Optional) Generate Worker types:
   ```bash
   bun run cf-typegen
   ```

### Development

- Start the development server:
  ```bash
  bun dev
  ```
  Opens at `http://localhost:3000` (or `$PORT`).

- Lint the codebase:
  ```bash
  bun lint
  ```

- Build for production:
  ```bash
  bun build
  ```

Add your API routes in `worker/userRoutes.ts` (do not modify `worker/index.ts`).

Replace `src/pages/HomePage.tsx` with your app UI. Use `AppLayout` from `src/components/layout/AppLayout.tsx` for sidebar layouts.

## Usage Examples

### Frontend Development
```tsx
// Example: Fetch data from API
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(res => res.json()),
});
```

### Backend API Routes
```ts
// In worker/userRoutes.ts
app.get('/api/users', async (c) => {
  return c.json({ users: [] });
});
```

### Custom Pages
```tsx
// src/main.tsx - Add routes
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/dashboard', element: <Dashboard /> },
]);
```

## Deployment

Deploy to Cloudflare with a single command:

```bash
bun deploy
```

This builds the app and deploys via Wrangler. Ensure you're logged in:

```bash
npx wrangler login
```

Configure your Cloudflare account and zone in `wrangler.toml` if needed.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/alicino-m/cgc30-build)

## Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Preview production build |
| `bun deploy` | Build + deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Project Structure

```
├── src/              # React app (Vite)
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities
│   └── pages/        # Page components
├── worker/           # Hono API routes
├── tailwind.config.js # Tailwind + shadcn config
└── wrangler.jsonc    # Cloudflare config
```

## Contributing

1. Fork the project.
2. Create a feature branch (`bun dev`).
3. Commit changes (`git commit -m "feat: ..."`).
4. Push and open a PR.

## License

MIT License. See [LICENSE](LICENSE) for details.