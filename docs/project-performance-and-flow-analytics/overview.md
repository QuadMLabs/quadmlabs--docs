---
id: ppfa-overview
title: Overview
sidebar_label: Overview
---

# Project Performance & Flow Analytics  
Project Performance & Flow Analytics is a custom Jira analytics solution designed to provide visibility into project performance, issue flow, and workflow health.

The project analyzes issue lifecycle and history data and transforms it into metrics, tables, and visualizations that help identify bottlenecks, delays, inconsistencies, and patterns in the way work moves through a project.

![Dashboard](../../static/img/d1.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
The solution was designed as a project-level dashboard, making its analysis available within the context of an individual Jira project.
:::

## The Problem

Jira provides extensive information about issues and their history, but turning that information into meaningful flow and performance metrics can require significant manual analysis.

For example, understanding how long issues spend in individual workflow states may require reviewing their histories, calculating transition durations, and repeating the process across multiple issues.

This project was created to simplify that analysis and make the resulting information easier to understand.

## What the Solution Analyzes

### Key Indicators

The dashboard provides an overview of project activity for a selected analysis period, including:

- Actual Weeks / Active Weeks
- Raw and Actual Throughput
- Inconsistency %
- Issues Created, Resolved, and Reopened
- Issues with Priority Changes
- Issues Unassigned or with Multiple Assignments

### Flow Health

The solution analyzes how work moves through the workflow using metrics such as:

- Average Cycle Time
- Average Lead Time
- Start Cycle Time
- P85 and P95 Lead Time
- Flow Efficiency
- Delivery Ratio
- Flow Predictability

The information can be explored through charts and detailed issue-level data.

### Flow Metrics

The project also analyzes workflow states to identify potential bottlenecks and patterns, including:

- Dominant workflow state
- Most frequent state
- Average number of states per issue
- Average and maximum duration per state
- Distribution of issues by state
- Detailed time spent by issue and state

This makes it possible to identify where work is spending the most time within a workflow.

### Issue History Explorer

The Issue History Explorer provides a more focused way to analyze changes made to an issue.

Users can:

- Search for an issue by key
- Review its recorded changes
- Filter history by field
- Focus on specific information such as status, assignee, or priority

This can be useful for troubleshooting, auditing, and understanding how an issue progressed through its lifecycle.

## Design Approach

The solution was designed around several principles:

- **Minimal configuration** — analysis should not depend on extensive setup.
- **Project-level context** — information should be meaningful within the project where the work takes place.
- **Data-driven analysis** — metrics should be derived from issue history and actual project activity.
- **Accessible visualization** — complex information should be presented through clear charts, tables, and indicators.
- **Practical analysis** — the goal is to help users identify patterns and areas for improvement rather than simply expose raw data.

## Who Can Benefit From It

The analysis can be useful for different roles involved in project delivery and service management, including:

- Project Managers
- Jira Administrators
- Scrum Masters
- Product Owners
- Developers
- QA and Support teams
- Technical and operational leadership

## Project Summary

Project Performance & Flow Analytics demonstrates how Jira issue data can be transformed into a more comprehensive view of project performance and workflow behavior.

The project combines **Jira data analysis, custom metrics, processing logic, and data visualization** to provide information that would otherwise require significant manual analysis.