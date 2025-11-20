---
id: integration-tools
title: Comprehensive JSM Implementation with Assets, ScriptRunner, and Refined
sidebar_label: Integration Tools
---

# Comprehensive JSM Implementation with Assets, ScriptRunner, and Refined

## Context

Operational resource management relied on an external application that provided limited visibility into processes. Data discrepancies, unclear ownership, lack of historical traceability, and inconsistent updates created friction between internal and external systems.  
As the project evolved, the scope expanded, requiring a flexible and scalable solution prepared to support additional teams and workflows.

---

## Objective

Centralize and standardize the entire resource lifecycle, establishing a robust integration with the external system while reducing manual tasks.  
The primary goal was to ensure end-to-end traceability, automate repetitive operations, and create a reliable and consistent flow of information between all systems.

---

## Technologies Used

- **Jira Service Management (JSM)**
- **Assets (Jira Assets)**
- **ScriptRunner for Jira**
- **REST APIs (Jira, ScriptRunner, Assets)**
- **Confluence**
- **Refined for Jira**

---

## Implementation

### 1. Jira Service Management
- Project creation from scratch.
- Workflow design with transitions validated and automated.
- Agent and customer portal configuration.
- Definition of screens, request types, and custom fields.
- Role and permission setup based on user profiles.
- Automation rules for the main flow and recurring tasks.

### 2. Jira Assets
- Full object schema design.
- Definition of object types, attributes, constraints, and relationships.
- Initial inventory import from multiple data sources.
- AQL-based custom fields for asset-to-ticket linking.
- Permissions defined at schema and object-type level.

### 3. ScriptRunner
- Advanced email customization.
- Behaviours for dynamic field control.
- Validations and workflow conditions.
- Post-functions for calculations and automatic transitions.
- Scheduled jobs for data synchronization with the external tool.

### 4. REST API Integrations
- Two-way integration with the external platform.
- Custom REST endpoints created for external consumption.
- Automated processes for create/update/close actions.
- Assets–JSM integration to maintain data consistency.

### 5. Confluence
- Full documentation including:
  - functional design,
  - solution architecture,
  - technical configuration,
  - maintenance procedures,
  - user guides for operational teams.

### 6. Refined
- Visual design of the portal, including:
  - templates,
  - structured navigation,
  - role-based content,
  - service categorization.

---

## Deliverables

- Fully configured JSM project aligned with operational processes.
- Unified portal for agents and customers.
- Implemented Asset schema with relationships and dependencies.
- Automated integration with the external system via REST APIs.
- Complete functional and technical documentation.
- Training and knowledge transfer sessions for internal teams.

---

## Results

- **Complete lifecycle traceability** for every managed resource.
- **Significant reduction of manual work** due to automation and scheduled jobs.
- **Unified and consistent data** between internal and external systems.
- **Improved user experience** through the Refined-designed portal.
- **Increased operational autonomy**, enabling teams to update inventory without technical intervention.
- **Stable bidirectional integration** ensuring real-time data accuracy.

---

## Role

- Jira Administration  
- Groovy Development  
- Functional and Technical Design  
- Testing (functional + technical)  
- Stakeholder Communication

---

## Duration

**~4 months**

---

## Current Status

The solution is live in production and continues to evolve through regular support, enhancements, and new automation improvements.
