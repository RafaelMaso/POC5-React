import Polaroid from "./components/polaroid";
import BotaoCurtida from "./components/BotaoCurtida";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Polaroid
        url="https://img.freepik.com/vetores-premium/texto-de-codigo-java-digital_53562-7014.jpg"
        text="Código em Java!"
      />
      <Polaroid
        url="https://cdn1.gnarususercontent.com.br/1/949082/e45bfb6f-7faf-42f5-84d9-c04abf16ea7a.png"
        text="Código em Python!"
      />

      {}
      <BotaoCurtida />
    </main>
  );
}
