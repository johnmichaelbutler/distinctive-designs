import Head from 'next/head';
import Contact from '../components/contact';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Distinctive Designs LLC</title>
        <link rel="icon" href="/logo_white.ico" />
      </Head>
      <main className="pt-16">
        <Hero />
        <Contact id="contact" />
      </main>

      <footer>
      </footer>
    </div>
  )
}
