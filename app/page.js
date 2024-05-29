import styles from "./page.module.css";
import MainCard from "./components/MainCard/MainCard";
import Collage from "./components/Collage/Collage";
import MyFooter from "./components/MyFooter/MyFooter";

export default function Home() {
  return (
    <main className={styles.main}>
      <Collage />  
      <MainCard />
      <MyFooter />
    </main>
  );
}
