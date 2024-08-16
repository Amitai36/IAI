import { QueryClientProvider, QueryClient } from "react-query"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ToastContainer theme="dark" position="top-center" />
      <App />
    </StrictMode>
  </QueryClientProvider>
)
