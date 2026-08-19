---
id: ppfa-quick-cards
title: Quick Cards
sidebar_label: Quick Cards
---
# Quick Cards Metrics

The Quick Cards provide a high-level view of issue activity and operational behavior during the selected analysis period.

Each card represents a specific condition derived from Jira issue data. Together, they provide a quick overview of work entering the project, moving through the workflow, being completed, and being modified during its lifecycle.

![Key indicators](../../static/img/quickCards.png)

## **1. Issues Created**

Represents all issues created within the selected analysis period.

This provides an indication of the volume of work entering the project.

## **2. Issues In Progress**

Counts issues currently in any status belonging to the **In Progress** status category.

The specific status name does not determine whether an issue is included. Any status mapped to the In Progress category is considered.

Examples may include:

- QA
- Review
- In Development
- Testing

## **3. Issues Resolved**

Represents issues that meet both of the following conditions:

- Their current status belongs to the **Done** status category.
- The Resolution field contains a value.

This includes different types of completed outcomes, such as completed, cancelled, or rejected issues.

The metric includes both consistent and inconsistent resolutions.

## **4. Inconsistent Issues**

Identifies issues where the workflow state and resolution data do not represent a consistent lifecycle.

The analysis considers three main conditions.

### Resolved but not in Done

The issue contains a Resolution value, but its final status does not belong to the Done category.

### In Done but not resolved

The issue belongs to the Done status category, but the Resolution field is empty.

### Invalid lifecycle data

The issue belongs to the Done category and has a Resolution, but additional inconsistencies are detected, such as:

- Resolution date occurring before the creation date.
- An issue being created and immediately transitioned directly to Done.

These conditions may indicate data-quality, workflow, or automation issues.

## **5. Reopened Issues**

Identifies issues that were previously completed and subsequently returned to an active workflow state.

An issue is considered reopened when:

1. It reached a Done-category status with a valid Resolution.
2. It later moved to a non-Done status.
3. Its Resolution was subsequently cleared.

This metric can help identify work that required additional attention after being considered complete.

## **6. Issues with Priority Change**

Represents issues where the **Priority** field changed at least once during their lifecycle.

Frequent priority changes may indicate changing requirements, shifting business needs, or uncertainty around prioritization.

## **7. Unassigned Issues**

Represents issues that currently have no assignee.

An issue is considered unassigned even if it had an assignee earlier in its lifecycle and was subsequently cleared.

This metric can help identify work that currently lacks a clear owner.

## **8. Reassigned Issues**

Represents issues where responsibility changed from one assignee to another during the issue lifecycle.

A high number of reassigned issues may indicate changes in ownership, workload distribution, or uncertainty about responsibility.

## Interpreting the Quick Metrics

The Quick Cards provide a compact view of several different aspects of project activity.

Together, these metrics help users understand how work is entering, moving through, and exiting the system.

### Work volume

**Issues Created** and **Issues Resolved** provide an indication of the amount of work entering and leaving the workflow.

A significant increase in created issues may indicate growing demand, while a high number of resolved issues reflects delivery activity.

### Workflow activity

**Issues In Progress** provides an indication of the amount of work currently moving through the workflow.

A consistently high number of in-progress issues may indicate capacity constraints, work accumulation, or bottlenecks.

### Process and data quality

**Inconsistent Issues** and **Reopened Issues** provide additional context around the reliability of the issue lifecycle.

A high number of inconsistencies may indicate workflow or data-governance problems, while frequent reopenings may indicate that work is being closed before the expected outcome is fully achieved.

### Ownership and prioritization

**Unassigned Issues**, **Reassigned Issues**, and **Priority Changes** provide visibility into how work ownership and priorities change during the lifecycle of an issue.

Frequent changes may indicate shifting requirements, workload redistribution, or opportunities to improve the intake and assignment process.

## Using the Metrics for Improvement

The Quick Cards can also be used as indicators for areas that may require further investigation.

Potential actions include:

- Review workflow configuration when inconsistent lifecycle states are detected.
- Require valid Resolution values when issues transition into Done statuses.
- Restrict inappropriate modifications to Resolution and Priority fields.
- Improve assignment practices to ensure issues have clear ownership.
- Review frequent priority changes to identify unclear or changing requirements.
- Analyze reopened issues to understand why completed work returned to the workflow.
- Investigate recurring inconsistencies to identify automation or configuration problems.
- Review automatic transitions that may create premature or unexpected status changes.
- Establish clear workflow and Definition of Done practices.

The objective is not simply to reduce the numbers shown by these cards, but to use them as signals for understanding **how work moves through the project and where the underlying process may need attention**.