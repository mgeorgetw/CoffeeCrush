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
    <h3 className={styles.title}>{methodDetails.name}</h3>
    <button className={styles.leftButton} onClick={onClose}>
      Close
    </button>
    <a
      className={styles.linkButton}
      href={methodDetails.learn}
      target="_blank"
      rel="noreferrer"
    >
      Learn
    </a>
  </div>
);
