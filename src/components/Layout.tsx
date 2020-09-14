import Head from 'next/head'

import Footer from './Footer'
import Navigation from './Navigation'

export const siteTitle = 'austinkostreba.com'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const layout = (
    <div className="h-screen max-w-3xl m-auto overflow-hidden antialiased py-8 px-16">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Turn data into effective decisions!"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:title" content={siteTitle} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main
        className="grid h-screen"
        style={{
          gridTemplateRows: 'auto 50px',
        }}
      >
        <div className="overflow-y-scroll h-full">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )

  return layout
}

export default Layout
