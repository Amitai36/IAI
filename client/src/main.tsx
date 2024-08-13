import { QueryClientProvider, QueryClient } from "react-query"
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.tsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)
