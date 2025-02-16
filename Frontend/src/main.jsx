import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { UrlContextProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UrlContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </UrlContextProvider>
  </StrictMode>,
)
