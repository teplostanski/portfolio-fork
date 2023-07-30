import Head from 'next/head'
import MainLayout from '../layouts/MainLayout'
import Main from '../components/Main/Main'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Links from '../components/Links/Links'
import Footer from '../components/Footer/Footer'
import { keywords, PageIndexDesc, PageIndexTitle } from '../constants'
//import '../styles/index.scss'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>{PageIndexTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageIndexDesc} />
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
      </Head>
      <Main />
      {/*<About />*/}
      {/*<Skills />*/}
      {/*<Links />*/}
      {/*<Footer />*/}
    </MainLayout>
  )
}

export default Index