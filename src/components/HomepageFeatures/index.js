import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Consulting and Optimization',
    Svg: require('@site/static/img/undraw_time-management_4ss6.svg').default,
    description: (
      <>
        Analyze requirements and Atlassian environments to improve configurations, workflows, and processes across Jira, JSM, and Confluence.
        <br /><br />
        <i>Practical solutions, clearer processes.</i>
      </>
    ),
  },
  {
    title: 'Automation and Integrations',
    Svg: require('@site/static/img/undraw_mcp-server_7kvc.svg').default,
    description: (
      <>
        Design and implement automation, scripts, and integrations to connect Atlassian tools, streamline processes, and reduce repetitive work.
        <br /><br />
        <i>Connect systems, automate processes, simplify work.</i>
      </>
    ),
  },
  {
    title: 'Custom Solutions and Development', 
    Svg: require('@site/static/img/undraw_code-review_jdgp.svg').default,
    description: (
      <>
        Design and implement custom solutions for Jira and Confluence when standard capabilities are not enough, combining Atlassian expertise with development to address specific technical requirements.
        <br /><br />
        <i>Extend Atlassian capabilities when configuration alone is not enough.</i>
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
