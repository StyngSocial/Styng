import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navigator from "../components/Navigator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Styng Social | Resources</title>
      </Head>
      <Navigator />
    </>
  );
}
