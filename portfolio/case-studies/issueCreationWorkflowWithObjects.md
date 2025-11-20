---
id: issue-creation-workflow-with-objects
title: Automated Issue Creation Workflow Integrated with Assets
sidebar_label: Workflow with Objects
---

# Automated Issue Creation Workflow Integrated with Assets

## Context

An internal team introduced a new strategic classification attribute to support operational segmentation across multiple Jira Software projects.  
Although the attribute was stored and maintained in Assets, Jira Software had no native mechanism to retrieve it during issue creation.

This gap resulted in:
- inconsistent usage across teams,
- lack of validation and standardization,
- no traceability regarding who applied the attribute or how it was being used,
- and operational inefficiencies when linking issues to the new classification.

---

## Objective

Enable users to create Jira Software issues by selecting a specific attribute directly from Assets, ensuring:
- standardized usage across all participating projects,
- automated validation during issue creation,
- full traceability regarding attribute usage,
- and proper synchronization between issue data and Assets.

---

## Technologies Used

- **Jira Software**
- **Assets (Jira Assets)**
- **ScriptRunner for Jira**
- **REST APIs (Jira & Assets)**
- **Xray**
- **Confluence**

---

## Implementation

### 1. Jira Software
- Workflow updates to incorporate attribute validation logic.
- Adjusted screens to include the Assets-retrieved attribute.
- Creation and configuration of new custom fields.
- Full end-to-end deployment across **development**, **QA**, and **production** environments.

### 2. Jira Assets
- AQL queries defined and optimized to retrieve valid attribute options.
- Query refinements to ensure real-time validation and filtering.

### 3. ScriptRunner
- Behaviours to dynamically control field visibility and allowable selections.
- Validations ensuring correct attribute usage according to business rules.
- Workflow conditions aligned with the new logic.
- Post-functions coordinating API interactions and synchronization steps.

### 4. REST APIs
- Integration between Jira Software and Assets to ensure accurate validation during issue creation.
- Automated referencing of object data during post-functions.

### 5. Xray
- Functional test cases covering:
  - field behavior,
  - validation paths,
  - successful creation scenarios,
  - and error handling.

### 6. Confluence
- Automated creation of documentation pages linked to Jira issues for enhanced traceability and record keeping.

---

## Deliverables

- Updated workflows and screens incorporating attribute selection and validation.
- Automated Confluence page creation linked to Jira issues.
- Consistent synch

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