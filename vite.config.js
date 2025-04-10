// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{
            find: "src", replacement: resolve(__dirname, "src")
        }]
    },
})