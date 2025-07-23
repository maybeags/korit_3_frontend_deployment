// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/korit_3_front_deployment_example/',
  plugins: [react()],
});

