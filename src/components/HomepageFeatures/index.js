import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import {
  AutomationIllustration,
  ConsultingIllustration,
  DevelopmentIllustration,
} from './illustrations';

const FeatureList = [
  {
    title: <Translate id="home.features.support.title">Support and troubleshooting</Translate>,
    Illustration: ConsultingIllustration,
    description: (
      <Translate id="home.features.support.description">
        {'I support Jira in production. When something breaks I find out what is really wrong, whether it is configuration, an app or a product bug. If it is mine to fix, I fix it. If it needs the vendor, I take it there with the evidence and follow it until it is resolved.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="home.features.automation.title">Automation and integrations</Translate>,
    Illustration: AutomationIllustration,
    description: (
      <Translate id="home.features.automation.description">
        {'ScriptRunner and Groovy, webhooks and REST APIs. I connect Jira to the rest of the toolchain and automate the repetitive parts of a process.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="home.features.development.title">Custom development</Translate>,
    Illustration: DevelopmentIllustration,
    description: (
      <Translate id="home.features.development.description">
        {'When configuration is not enough I write the code: ScriptRunner behaviours and listeners, or apps on Forge with React. Right now I am rebuilding Data Center plugins as Forge apps for a move to Cloud.'}
      </Translate>
    ),
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
