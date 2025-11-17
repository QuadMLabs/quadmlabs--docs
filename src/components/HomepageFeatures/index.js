import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Consulting and Optimization',
    Svg: require('@site/static/img/undraw_time-management_4ss6.svg').default,
    description: (
      <>
        I help teams and administrators get the most out of Jira, JSM, and Confluence by optimizing configurations, workflows, and dashboards to meet the specific needs of each organization.
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
        I design rules, scripts, and integrations that connect tools, eliminate repetitive tasks, and improve productivity within the Atlassian environment.
        <br /><br />
        <i>Automate, integrate, and accelerate your daily operations.</i>
      </>
    ),
  },
  {
    title: 'Custom Apps and Development', 
    Svg: require('@site/static/img/undraw_code-review_jdgp.svg').default,
    description: (
      <>
        I create custom apps and extensions for Jira and Confluence, including solutions published on the Atlassian Marketplace.
        <br /><br />
        <i>Custom functionality to enhance your Atlassian environment.</i>
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
