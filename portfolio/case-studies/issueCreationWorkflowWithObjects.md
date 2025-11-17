---
id: issue-creation-workflow-with-objects
title: Issue creation workflow with objects
sidebar_label: Workflow with Objects
---

# Issue Creation Workflow With Objects 

## Context

An internal team introduced a new strategic classification attribute to support operational segmentation. The attribute was imported and managed in Assets, but there was no mechanism for Jira Software projects to query or use it during issue creation.

The requirement was to enable users in Jira Software to select this attribute directly from Assets when creating specific issue types, ensuring consistent usage and providing traceability regarding how and by whom the attribute was applied.

---

## Objective

Enable the automated creation of issues in Jira Software by allowing users to select a specific attribute stored in Assets. This ensures consistent usage, proper validation, and full traceability of where the attribute is applied, who uses it, and how it is integrated into the operational process.

---

## Tools used

- Jira Software
- Assets
- Scriptrunner
- Jira Rest APIs
- Assets Rest APIs
- Xray
- Confluence

---

## Implementation Breakdown

- **Jira Software**
    - Workflow design and updates to incorporate the new logic.
    - Screen configuration adjustments to include and control the new attribute selection.
    - Creation and configuration of custom fields.
    - Full implementation cycle across development, QA, and production environments.

- **Assets**
    - Definition and refinement of AQL queries to retrieve and validate attribute data.

- **ScriptRunner**
    - Behaviors to dynamically control field visibility and selection.
    - Validations to ensure proper attribute usage.
    - Conditions aligned with workflow logic.
    - Post functions to manage integrations.

- **Rest APIs**
    - Integration between Assets and Jira Software to guarantee accurate synchronization and validation during issue creation.

- **Xray**
    - Functional testing of the implemented logic and workflows.

- **Confluence**
    - Automatic creation of documentation pages and linking them to Jira Software issues.


---

## Deliverables

- Updated workflows and screens, adjusted to incorporate the new attribute selection and validation logic.
- Automated creation and linking of Confluence pages from Jira Software issues for improved documentation and traceability.
- Synchronized updates to object information in Assets, ensuring consistency between issue data and the attribute managed in the object schema.
- Implementation of the entire logic across the three environments (development, staging, production)  
- Delivery of a full test suite demonstrating the expected behavior and validating the implemented functionality
---

## Results

The implemented automation significantly optimized the creation of issues associated with Asset objects, ensuring greater consistency and accuracy in the information between Assets and Jira Software. This notably improved object tracking, making it easy to identify how many issues are linked to each object and which projects they belong to, thus providing greater clarity and control over the use and traceability of attributes.

---

## Role in the Project

Jira Administration, Groovy Development, Functional & Technical Testing

---

## Duration

~4 months

---

## Current Status

The functionality is fully deployed in production and actively operating across multiple projects simultaneously, supporting consistent usage and traceability of Assets-related information. 