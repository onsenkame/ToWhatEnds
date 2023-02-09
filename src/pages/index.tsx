import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Main from './components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>To What Ends</title>
        <meta name="description" content="A YOU centric choose your own adventure game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Main />
      </main>
    </>
  )
}
