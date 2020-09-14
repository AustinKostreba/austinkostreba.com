import Head from 'next/head'

const Home: React.FC = () => (
  <div className="w-full">
    <Head>
      <title>Austin Kostreba</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <article className="text-lg w-full font-mono">
        <span className="text-2xl font-suezOne tracking-wide">
          Hey! My name's Austin{' '}
        </span>
        and I'm a software architect for{' '}
        <a
          href="https://viewpointsolution.org"
          className="text-blue-600 underline"
        >
          Viewpoint
        </a>
        .
      </article>
    </main>

    <footer></footer>
  </div>
)

export default Home
