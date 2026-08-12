import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Consulting and Optimization',
    Svg: require('@site/static/img/undraw_time-management_4ss6.svg').default,
    description: (
      <>
        I help organizations get the most out of Jira, JSM, and Confluence by optimizing configurations, workflows, and dashboards to align with their specific needs.
        <br /><br />
        <i>Clearer processes, more efficient teams.</i>
      </>
    ),
  },
  {
    title: 'Automation and Integrations',
    Svg: require('@site/static/img/undraw_mcp-server_7kvc.svg').default,
    description: (
      <>
        I design automation rules, scripts, and integrations that connect tools, streamline processes, and reduce repetitive work across the Atlassian environment.
        <br /><br />
        <i>Automate, integrate, and simplify your workflows.</i>
      </>
    ),
  },
  {
    title: 'Custom Solutions and Development', 
    Svg: require('@site/static/img/undraw_code-review_jdgp.svg').default,
    description: (
      <>
        I build custom solutions and extensions for Jira and Confluence when standard configuration isn't enough, using development to address specific business and technical requirements.
Extend Atlassian capabilities with solutions built for your needs.
        <br /><br />
        <i>Custom solutions for your Atlassian needs.</i>
      </>
    ),
  },
];

function Feature({Svg, img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={img} alt={title} className={styles.featureImg} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
