import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Up Close and Personal</title>
        <meta name="description" content="Up Close and Personal" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Up Close and Personal</h1>
        <Image src="/332.gif" alt="Faces" width={500} height={500} />
      </main>
    </div>
  );
}
