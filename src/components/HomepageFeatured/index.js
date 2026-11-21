import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const facts = [
  {value: '6+', label: 'years with Jira, JSM, and Confluence'},
  {value: 'Thousands', label: 'of users supported on multi-node Data Center'},
  {value: 'Certified', label: 'in Atlassian Cloud, ITSM and Agile DevOps'},
  {value: 'Forge', label: 'an analytics app I built and documented'},
];

export default function HomepageFeatured() {
  return (
    <section className={styles.featured}>
      <div className="container">
        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li key={fact.value} className={styles.fact}>
              <span className={styles.factValue}>{fact.value}</span>
              <span className={styles.factLabel}>{fact.label}</span>
            </li>
          ))}
        </ul>

        <div className={styles.project}>
          <img
            className={styles.projectImage}
            src={useBaseUrl('/img/d1.png')}
            alt="Project Performance & Flow Analytics dashboard"
          />
          <div className={styles.projectText}>
            <span className={styles.eyebrow}>Featured project</span>
            <Heading as="h2">Project Performance &amp; Flow Analytics</Heading>
            <p>
              A Jira Cloud app I built on Forge with a React custom UI. It reads issue history
              and shows how work really flows: where it waits, what gets reopened and where the
              data is inconsistent. Doing that by hand means opening issue histories one by one.
            </p>
            <Link
              className="button button--primary"
              to="/projects/project-performance-and-flow-analytics/">
              View project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
