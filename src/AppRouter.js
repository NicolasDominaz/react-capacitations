
import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const SoccerField = lazy(() => import('./pages/SoccerField'));
const RenderTools = lazy(() => import('./pages/RenderTools'));
const Events = lazy(() => import('./pages/Events'));
const Bootstrap = lazy(() => import('./pages/Bootstrap'));
const Platosprincipales = lazy(() => import('./pages/Platosprincipales'));

const AppRouter = () => {

  const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>loading!!</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/soccer-field" element={<SoccerField />} />
              <Route path="/render-tools" element={<RenderTools />} />
              <Route path="/events" element={<Events />} />
              <Route path="/bootstrap" element={<Bootstrap />} />
              <Route path="/platosprincipales" element={<Platosprincipales />} />

            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    )
}

export default AppRouter;
