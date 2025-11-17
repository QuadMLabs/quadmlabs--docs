---
id: integration-tools
title: Comprehensive JSM Implementation with Assets, ScriptRunner, and Refined
sidebar_label: Integration Tools
---

# Full Tool Integration

## Context

Operational elements management relied on an external application, but the process lacked transparency and standardization. There was limited visibility into the status of each resource, unclear ownership across teams, and inconsistencies between internal and external data.
Additionally, the scope evolved over time, requiring the solution to remain flexible and adaptable.

---

## Objective

Centralize and standardize the full lifecycle of resource handling while automating key interactions between internal tools and the external system. The goal was to ensure complete traceability, reduce manual intervention, and enable a consistent and reliable flow of information end-to-end.

---

## Tools used

- Jira Service Management (JSM)
- Assets
- Scriptrunner
- Jira Rest APIs
- Scriptrunner Rest APIs
- Assets Rest APIs
- Confluence
- Refined

---

## Implementation Breakdown

- **Jira Service Management**
    - Project creation from scratch.
    - Design and implementation of the complete workflow.
    - Building the agent portal and configuring requests.
    - Creation of custom fields (standard and asset-based).
    - Assignment of roles based on user type.
    - Implementation of automations for the main flow.

- **Assets**
    - Design of the object schema from scratch.
    - Creation of object types.
    - Initial data import.
    - Definition of relationships using AQL.
    - Configuration of AQL-based fields.
    - Definition of schema roles and permissions.

- **ScriptRunner**
    - Advanced email customization.
    - Behaviors.
    - Validations.
    - Conditions.
    - Post functions.
    - Scheduled jobs for data synchronization.

- **Rest APIs**
    - Integration with an external tool via REST API (native Jira + ScriptRunner).
    - Creation of REST endpoints for external consumption.
    - Integration Assets with JSM.

- **Confluence**
    - Complete documentation of the process, configurations, workflows, and technical decisions.

- **Refined**
    - Visual design of the portal.

---

## Deliverables

- JSM project fully configured, including workflows, screens, fields, automation, and permissions aligned to client requirements.
- Service portal design, optimized for usability and role-based access.
- Assets object schema designed and implemented according to the operational model.
- Custom REST endpoints to enable communication with external systems.
- Full project documentation, including configuration details, instructions, and maintenance guidelines.

---

## Results

The implementation significantly improved operational management by enabling complete lifecycle traceability, ensuring consistent and automated assignment logic through centralized data structures, and granting full autonomy for maintaining key elements without interrupting daily operations. The bidirectional integration with the external system now functions reliably, while the redesigned portal, workflow structure, and automation rules deliver a clearer and more efficient experience for both end users and managers.

---

## Role in the Project

Jira Administration, Groovy Development, Functional & Technical Testing

---

## Duration

~4 months

---

## Current Status

The system is in production and continues to evolve through regular support sessions and continuous improvements.