import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const config = {
    plugins: [react()],
    // Absolute Imports
    resolve: {
      alias: {
        src: "/src"
      }
    },
    base: "./"
  }

  if (command !== 'serve') {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    // const env = loadEnv(mode, process.cwd(), ``)
    const REPOSITORY_NAME = process.env.REPOSITORY_NAME;
    console.warn("REPOSITORY NAME: ", REPOSITORY_NAME);
    config.base = `./${REPOSITORY_NAME}`;
  }

  return config;
})
