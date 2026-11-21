---
id: experience
title: Experience
slug: /
hide_table_of_contents: true
---

import {CaseStudy} from '@site/src/components/Cards';

# Experience

<p className="lead">
Three engagements that show the kind of work I do.
</p>

They are anonymized, so you won't find client names here: only what the problem was and what I did about it.

<CaseStudy
  number="01"
  title="Advanced Atlassian Support"
  scope="Jira Data Center · 3 environments (dev, QA, production) · 3 to 4 nodes each · thousands of users · user sync from Crowd"
  challenge="I supported a multi-node Jira Data Center environment full of custom configuration, internal processes, integrations and third-party apps. The job was not to close tickets: whatever came in, simple or not, I had to get to the bottom of it."
  focus="Most of the work was investigation: reading logs across nodes, reproducing the problem, and working out whether the cause was our configuration, a third-party app or Jira itself."
  actions={[
    "Troubleshot Jira Data Center with Atlassian's support tools and logs collected from several nodes.",
    'Chased down permission and notification problems with the Jira diagnostic tools, and ran a full reindex when the instance needed one.',
    'Reproduced issues across Jira, Confluence and third-party apps.',
    'Used ScriptRunner for admin tasks, diagnostics, checking behaviour as a specific user, bulk operations and log analysis.',
    'Set up webhooks to connect Jira with outside processes and collaboration tools.',
    'Looked after the Jira and Confluence apps used for reporting, testing, integrations, workflow extensions and project management.',
    'When it was a product problem, I gathered the evidence and opened the case with Atlassian or the app vendor (ScriptRunner, Xray and others).',
  ]}
  tools={['Jira Data Center', 'Crowd', 'Confluence', 'ScriptRunner', 'Webhooks', 'Log analysis', 'Vendor support']}
/>

<CaseStudy
  number="02"
  title="Atlassian Solution Design & Implementation"
  challenge="Design and delivery of an Atlassian solution for a client, from the first requirements to production."
  focus="The hard part was turning business requirements into something maintainable, deciding at each step what standard Jira could do, what needed automation and what needed custom code."
  actions={[
    'Analyzed the requirements and designed the solution.',
    'Built a proof of concept to check that Jira could really do what was asked.',
    'Wrote automation and custom functionality in Groovy with ScriptRunner.',
    'Designed and configured Assets to hold structured information.',
    'Set up the Jira side: schemes, custom fields, workflows, roles, permissions and SLAs.',
    'Tested, demoed to the client and refined the solution from their feedback.',
    'Took it to production and supported it afterwards.',
  ]}
  tools={['Jira', 'Assets', 'Groovy', 'ScriptRunner', 'SLAs', 'Workflows']}
/>

<CaseStudy
  number="03"
  title="Asset Management & Traceability"
  challenge="A solution to manage and track asset information with Jira and Assets."
  focus="It needed Assets modeling, Jira configuration, automation, reporting and custom code working together, so operations could trace every asset."
  actions={[
    'Designed the Assets object structure: attributes, relationships, states and data dependencies.',
    'Built Assets custom fields and AQL queries to pick data dynamically.',
    'Automated and extended it with Groovy and ScriptRunner.',
    'Created Assets reports showing the status and movement of assets.',
    'Defined roles, permissions and schemas to fit the requirements.',
    'Documented requirements and user guidance in Confluence.',
  ]}
  tools={['Jira', 'Assets', 'AQL', 'ScriptRunner', 'Confluence', 'Reporting']}
/>
