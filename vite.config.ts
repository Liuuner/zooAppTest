import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    // Absolute Imports
    resolve: {
      alias: {
        src: "/src"
      }
    },
    base: "/zooAppTest"
  }

  return config;
})
