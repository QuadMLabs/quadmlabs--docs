---
id: ppfa-flow-metrics-overview
title: Flow Metrics Overview
sidebar_label: Flow Metrics Overview
---
# Flow Metrics Overview

The **Flow Metrics Overview** section analyzes how issues move through the workflow during the selected period.

It combines summary metrics, comparative charts, and issue-level data to identify bottlenecks, frequently used states, rarely used states, and unusual workflow behavior.

The objective is to compare the **workflow as configured in Jira** with the way work actually moves through it.

![Key indicators](../../static/img/flowMetrics.png)

## What This Section Helps Identify

The analysis can help answer questions such as:

- Which workflow state causes the most delay?
- Which states are visited most frequently?
- Are some workflow states rarely or never used?
- Are issues passing through more states than expected?
- Are issues bypassing important stages?
- Which individual issues behave differently from the general workflow pattern?

These indicators are particularly useful when reviewing whether the configured workflow accurately represents the team's real operating process.

## Metric Cards
### 1. Main Bottleneck

Identifies the workflow state with the highest average duration.

The metric displays:

- The state with the longest average duration
- The average time spent in that state

A long duration does not necessarily indicate a problem. Some states naturally require more time depending on the type of work.

The metric becomes more useful when compared with expected processing times, SLAs, or the team's defined process.

### 2. Most Frequent State

Identifies the workflow state visited by the largest number of issues.

The metric displays:

- The most frequently visited state
- The average time spent in that state

A highly frequent state may represent an essential processing step, but it may also reveal a point where work accumulates or where issues repeatedly converge.

Frequency should therefore be considered together with duration.

### 3. Average States per Issue

Measures the average number of workflow states visited by issues during their lifecycle.

This provides an indication of how complex or consistent the observed workflow path is.

The metric uses visual thresholds to highlight potential differences between the configured workflow and actual issue behavior:

- **Green** — expected flow behavior
- **Yellow** — potential inconsistencies or variations
- **Red** — significant deviation from the expected workflow

A consistently high or low value across multiple analysis periods may indicate that the workflow design and actual team practices are not fully aligned.

## Charts

### 1. Average vs. Maximum Duration by State

This chart compares the average and maximum time spent in each workflow state.

![Key indicators](../../static/img/flowMetricsCh1.png)

The difference between the average and maximum values can reveal outlier issues that significantly affect the overall workflow.

For example, a state with a relatively low average duration but a very high maximum may indicate that most issues move through the state normally while a small number of issues become significantly delayed.

#### Reopened Issues

If the **Done** state has recorded duration, this indicates that at least some issues subsequently left the Done category and re-entered the workflow.

This can be an indicator of:

- Rework
- Incorrect closure
- Quality issues
- Issues being reopened after completion

The metric therefore provides additional context when interpreting the duration of the Done state.

### 2. Distribution of Issues by State

This horizontal bar chart shows the percentage of analyzed issues that passed through each workflow state.

![Key indicators](../../static/img/flowMetricsCh2.png)

The distribution provides insight into how frequently each state is actually used.

States with very low usage may indicate:

- Optional workflow paths
- Rare business scenarios
- States that are no longer needed
- Steps that teams routinely bypass

Low usage does not automatically mean that a state should be removed. Critical states with unexpectedly low usage, however, may indicate that the configured process is not being followed consistently.

## Chart View and List View

### Chart View

The Chart View provides the aggregated analysis through summary cards and visualizations.

It is intended for quickly identifying patterns, bottlenecks, and unusual workflow behavior.

### List View

The List View provides issue-level information behind the aggregated metrics.

![Key indicators](../../static/img/flowMetricsList.png)

It can be used to investigate individual issues and identify the specific records contributing to unusual averages or workflow patterns.

For example, it can help identify issues that:

- Passed through an unusually large number of states
- Skipped expected workflow stages
- Spent significantly longer than average in a particular state
- Followed an unusual transition path

This makes the List View useful when moving from **aggregate analysis to root-cause investigation**.

## Interpreting the Results

The Flow Metrics Overview should be interpreted as a diagnostic tool rather than as an automatic recommendation to change the workflow.

A state with high duration may be legitimate. A state with low usage may be required for exceptional cases. Similarly, a high number of workflow states does not necessarily mean that the workflow is poorly designed.

The value of the analysis comes from comparing the observed behavior with:

- Expected business processes
- Workflow design
- SLAs or target processing times
- Team practices
- Historical results

This allows teams to distinguish between **intentional workflow behavior** and patterns that may indicate opportunities for improvement.


## Summary

The Flow Metrics Overview provides a diagnostic view of how the Jira workflow behaves in practice.

By combining aggregate metrics with issue-level information, it helps users:

- Identify bottlenecks and delays
- Understand which states are actually being used
- Detect rarely used or bypassed workflow stages
- Investigate unusual issue paths
- Identify potential rework and reopening patterns
- Compare configured workflows with real operational behavior

Reviewing these metrics periodically can also help evaluate whether workflow changes are producing the intended improvements.