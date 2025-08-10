import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [ react()
    // tailwindcss()
  ],
  server: {
        host: '0.0.0.0', // This makes the app accessible on the network
        port: 5173, // Optional: specify a port, otherwise it uses the default
      },
})  

