import Head from "next/head";
import styles from "@/styles/Home.module.css";
import User from "../components/user";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { useState } from "react";
import City from "../components/city";
export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(1);

  return (
    <>
      <Head>
        <title>Journey Tracker</title>
        <meta name="description" content="Journey Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image src={logo} height={150} width={150} alt="logo" />
        {pageIndex === 1 ? (
          <User pageIndex={pageIndex} setPageIndex={setPageIndex} />
        ) : (
          <City pageIndex={pageIndex} setPageIndex={setPageIndex} />
        )}
      </main>
    </>
  );
}
