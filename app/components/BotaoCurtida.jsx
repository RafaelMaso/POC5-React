"use client";

import styles from "./BotaoCurtida.module.css";
import { useState } from "react";

export default function BotaoCurtida() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={
        selected
          ? `${styles.BotaoCurtida} ${styles.selected}`
          : styles.BotaoCurtida
      }
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <img
        src={
          selected ? "/images/heart_white_fill.png" : "/images/heart_black.png"
        }
        alt="coração"
      />
      <p>Like</p>
    </div>
  );
}
