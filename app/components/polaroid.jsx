import styles from "./polaroid.module.css";

export default function Polaroid({ url, text }) {
  return (
    <figure className={styles.polaroid}>
      <img alt={text} src={url} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

