import styles from "./Card.module.css";

export const CardContainer = ({ children }: { children: any }) => (
  <div className={styles.flexCardContainer}>{children}</div>
);

export const Card = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => (
  <li className={`${styles.flexCardListItem} ${className}`}>
    <div className={styles.flexCard}>{children}</div>
  </li>
);
