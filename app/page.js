import Image from "next/image";
import styles from "./page.module.css";
import MainCard from "./components/MainCard/MainCard";
import Collage from "./components/Collage/Collage";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Collage />  
      <MainCard />
    </main>
  );
}
