import styles from './styles.module.css';

/** Row of small rounded tags, used for tools and skills. */
export default function TagList({items}) {
  return (
    <ul className={styles.tags}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}
