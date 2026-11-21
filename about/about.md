---
id: about
title: About
slug: /
hide_table_of_contents: true
---

import {CardGrid, Card, StepCard, ContactCard} from '@site/src/components/Cards';

# About

<p className="lead">
I'm an Atlassian consultant with more than six years working with Jira, Jira Service Management and Confluence. Most of that time was in production environments where people depend on these tools every day, so they have to work, and when they don't, someone has to find out why.
</p>

My background is on the administration and support side, but I also write code: ScriptRunner scripts, integrations, and apps on Forge. Having both is what lets me understand how a team works and then build or fix whatever that team needs.

QuadMLabs is the name I use for my Atlassian work and my projects.

## How I work

<CardGrid>
  <StepCard number="01" title="Process first">
    Before I touch the tool, I want to understand what the team is actually trying to do.
  </StepCard>
  <StepCard number="02" title="Smallest fix that works">
    Sometimes it's configuration, sometimes automation, sometimes it needs code. I start with the simplest one.
  </StepCard>
  <StepCard number="03" title="Evidence first">
    If I think it's a product bug, I reproduce it and collect the logs before opening a case with the vendor.
  </StepCard>
  <StepCard number="04" title="Leave it documented">
    Someone should be able to understand it months later, and that someone is often me.
  </StepCard>
</CardGrid>

## What I do

<CardGrid columns={2}>
  <Card eyebrow="Running the platform" title="Administration and support">
    Troubleshooting and support of multi-node Jira Data Center environments with thousands of users, plus Jira Service Management and Confluence.
  </Card>
  <Card eyebrow="Extending it" title="Automation and development">
    Groovy and ScriptRunner, REST APIs and webhooks, and apps built on Atlassian Forge with React.
  </Card>
</CardGrid>

## Contact {#contact}

For questions about my work or anything related to Atlassian:

<ContactCard
  items={[
    {label: 'General inquiries', email: 'info@quadmlabs.com'},
    {label: 'Technical collaboration', email: 'admin@quadmlabs.com'},
  ]}
/>
