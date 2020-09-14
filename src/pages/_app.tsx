import type { AppProps } from 'next/app'

import '../styles/global.css'
import Layout from '../components/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const getLayout = (page) => <Layout>{page}</Layout>

  return getLayout(<Component {...pageProps} />)
}

export default App
