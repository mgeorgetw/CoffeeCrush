import { MouseEventHandler } from "react";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import styles from "./Navigation.module.css";

export const Navigation = ({
  methodDetails,
  onClose,
}: {
  methodDetails: TypeBrewMethod;
  onClose: MouseEventHandler;
}) => (
  <div className={styles.navigation}>
    <button className={styles.navButton} onClick={onClose}>
      Close
    </button>

    <h3 className={styles.title}>{methodDetails.name}</h3>

    <a
      className={styles.navButton}
      href={methodDetails.learn}
      target="_blank"
      rel="noreferrer"
    >
      Learn
    </a>
  </div>
);
