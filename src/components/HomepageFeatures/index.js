import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {
  AutomationIllustration,
  ConsultingIllustration,
  DevelopmentIllustration,
} from './illustrations';

const FeatureList = [
  {
    title: 'Support and troubleshooting',
    Illustration: ConsultingIllustration,
    description:
      'I work on multi-node Jira Data Center environments with thousands of users. When something breaks I find out what is really wrong, whether it is configuration, an app or a product bug, and I fix it or take it to the vendor with the evidence.',
  },
  {
    title: 'Automation and integrations',
    Illustration: AutomationIllustration,
    description:
      'ScriptRunner and Groovy, webhooks and REST APIs. I connect Jira to the rest of the toolchain and automate the repetitive parts of a process.',
  },
  {
    title: 'Custom development',
    Illustration: DevelopmentIllustration,
    description:
      'When configuration is not enough I write the code: ScriptRunner behaviours and listeners, or complete apps on Forge with React.',
  },
];

function Feature({Illustration, title, description}) {
  return (
    <div className="col col--4">
      <div className={styles.card}>
        <div className="text--center">
          <Illustration />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
