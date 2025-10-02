import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Make sure you have the React plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    historyApiFallback: true, // fallback to index.html on reload
  },
})
