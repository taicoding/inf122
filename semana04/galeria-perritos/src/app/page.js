import styles from "./page.module.css";
import Foto from "./components/foto";

export default function Home() {
  return (
    <div className={styles.main}>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>
    </div>
  );
}
