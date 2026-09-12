import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { SiteLayout } from '@/components/layout/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { GaleriaPage } from '@/pages/GaleriaPage';
import { DownloadsPage } from '@/pages/DownloadsPage';
import { ArtigosPage } from '@/pages/ArtigosPage';
import { CalendarioPage } from '@/pages/CalendarioPage';
import { SobrePage } from '@/pages/SobrePage';
import { AdmissaoPage } from '@/pages/AdmissaoPage';
import { ArtigoPage } from '@/pages/ArtigoPage';
import { PrivacidadePage } from '@/pages/PrivacidadePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/galeria", element: <GaleriaPage /> },
      { path: "/downloads", element: <DownloadsPage /> },
      { path: "/artigos", element: <ArtigosPage /> },
      { path: "/artigos/:slug", element: <ArtigoPage /> },
      { path: "/calendario", element: <CalendarioPage /> },
      { path: "/sobre", element: <SobrePage /> },
      { path: "/admissao", element: <AdmissaoPage /> },
      { path: "/privacidade", element: <PrivacidadePage /> },
      { path: "*", element: <NotFoundPage /> },
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)