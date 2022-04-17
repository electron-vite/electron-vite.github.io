const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://electron-vite.netlify.app' : 'http://localhost:3000'

export const metaData = {
  title: 'Electron Vite',
  description: 'Build Electron APP with Vite',
  site,
  image: `${site}/assets/logo.png`,
}
