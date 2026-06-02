import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const groqKey = env.GROQ_API_KEY || process.env.GROQ_API_KEY

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api/groq': {
          target: 'https://api.groq.com/openai/v1/chat/completions',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/groq/, ''),
          headers: {
            Authorization: `Bearer ${groqKey}`,
          },
        },
      },
    },
  })
}
