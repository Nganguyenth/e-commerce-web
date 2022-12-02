import { lstatSync, readdirSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const getFiles = (folder = ''): Array<any> => {
  const dir = resolve(__dirname, 'src/styles/' + folder)
  const files = readdirSync(dir)
  return files.map((f) => {
    if (f.endsWith('.css') || f.endsWith('.scss')) return dir + '/' + f
    if (lstatSync(dir + '/' + f).isDirectory()) return getFiles(f)
    return ''
  })
}

export default defineConfig({
  publicDir: false,
  build: {
    rollupOptions: {
      input: getFiles()
        .flat()
        .filter((y) => y),
      output: {
        assetFileNames: '[name]-[hash].[ext]'
      }
    }
  }
})
