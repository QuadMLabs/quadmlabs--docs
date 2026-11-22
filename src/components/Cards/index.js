import clsx from 'clsx';
import styles from './styles.module.css';

/** Responsive grid for cards. `columns` is the maximum number per row. */
export function CardGrid({children, columns = 3}) {
  return (
    <div className={clsx(styles.grid, columns === 2 && styles.cols2)}>
      {children}
    </div>
  );
}

/** Generic card: optional small label, title, body and footer (e.g. tags). */
export function Card({eyebrow, title, children, footer}) {
  return (
    <div className={styles.card}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {children && <div className={styles.body}>{children}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

/** Card with a large step number, used for "how I work" style lists. */
export function StepCard({number, title, children}) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

/** List of contact rows, each with a label and a mailto link. */
export function ContactCard({items}) {
  return (
    <div className={clsx(styles.card, styles.contact)}>
      {items.map((item) => (
        <div key={item.email} className={styles.contactRow}>
          <span className={styles.eyebrow}>{item.label}</span>
          <a href={`mailto:${item.email}`}>{item.email}</a>
        </div>
      ))}
    </div>
  );
}
