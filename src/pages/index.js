import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatured from '@site/src/components/HomepageFeatured';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={useBaseUrl('/img/logo-mark.svg')}
          alt="QuadMLabs"
          className={styles.heroLogo}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={styles.heroEyebrow}>
          <Translate id="home.hero.eyebrow">Atlassian Consulting</Translate>
        </p>
        <p className={clsx('hero__subtitle', styles.heroTagline)}>
          <Translate id="home.hero.tagline">
            {'I work with Jira, Jira Service Management and Confluence: keeping them running in production, fixing what breaks, and building what the platform does not do out of the box.'}
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/experience">
            <Translate id="home.hero.viewExperience">View Experience</Translate>
          </Link>
          <Link className="button button--outline button--primary button--lg" to="/about#contact">
            <Translate id="home.hero.contact">Contact</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({
        id: 'home.hero.tagline',
        message:
          'I work with Jira, Jira Service Management and Confluence: keeping them running in production, fixing what breaks, and building what the platform does not do out of the box.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageFeatured />
      </main>
    </Layout>
  );
}
