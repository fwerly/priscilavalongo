import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Isso garante que process.env funcione (para a API Key do Gemini)
    'process.env': process.env
  }
});
