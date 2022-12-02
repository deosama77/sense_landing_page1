import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
import FifthPage from "../components/FifthPage";
import SixthPage from "../components/SixthPage";
import SeventhPage from "../components/SeventhPage";
import EighthPage from "../components/EighthPage";
import NinthPage from "../components/NinthPage";
import FourthPage from "../components/FourthPage";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sense</title>
        <meta name="description" content="Sense" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <FirstPage></FirstPage>
          <SecondPage></SecondPage>
          <ThirdPage></ThirdPage>
          <FourthPage></FourthPage>
          <FifthPage></FifthPage>
          <SixthPage></SixthPage>
          <SeventhPage></SeventhPage>
          <EighthPage></EighthPage>
          <NinthPage></NinthPage>
      </main>

    </div>
  )
}
