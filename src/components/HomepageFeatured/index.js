import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function HomepageFeatured() {
  const facts = [
    {
      value: translate({id: 'home.facts.years.value', message: '6+'}),
      label: translate({
        id: 'home.facts.years.label',
        message: 'years with Jira, JSM, and Confluence',
      }),
    },
    {
      value: translate({id: 'home.facts.migration.value', message: 'DC → Cloud'}),
      label: translate({
        id: 'home.facts.migration.label',
        message: 'rebuilding Data Center plugins as Forge apps',
      }),
    },
    {
      value: translate({id: 'home.facts.certified.value', message: 'Certified'}),
      label: translate({
        id: 'home.facts.certified.label',
        message: 'in Atlassian Cloud, ITSM and Agile DevOps',
      }),
    },
  ];

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
            alt={translate({
              id: 'home.featured.imageAlt',
              message: 'Project Performance & Flow Analytics dashboard',
            })}
          />
          <div className={styles.projectText}>
            <span className={styles.eyebrow}>
              <Translate id="home.featured.eyebrow">Featured project</Translate>
            </span>
            <Heading as="h2">Project Performance &amp; Flow Analytics</Heading>
            <p>
              <Translate id="home.featured.description">
                {'A Jira Cloud app I built on Forge with a React custom UI. It reads issue history and shows how work really flows: where it waits, what gets reopened and where the data is inconsistent. Doing that by hand means opening issue histories one by one.'}
              </Translate>
            </p>
            <Link
              className="button button--primary"
              to="/projects/project-performance-and-flow-analytics/">
              <Translate id="home.featured.button">View project</Translate>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
