---
id: ppfa-issue-history
title: Issue History
sidebar_label: Issue History
---
# Issue History

The **Issue History** section provides a focused view of how an individual Jira issue evolved throughout its lifecycle.

Users can search for an issue by key and review both its issue-specific flow metrics and its complete change history.

![Key indicators](../../static/img/history.png)

## Searching for an Issue

The tool uses the issue key to retrieve the historical activity of an issue.

For example:

>```
> PROJ-123
>```

The search is restricted to the current project, since the application operates at project level.

Only searches by issue key are supported. Searching by summary, reporter, description, or other issue attributes is not available.

## Issue-Specific Flow Metrics

Once the issue is found and analyzed, two main outputs are displayed:

---

### 1. Flow Health Metrics Summary (Issue-Specific)

Once an issue is found, the application provides a compact view of its flow behavior.

![Key indicators](../../static/img/historyFlow.png)

The issue-level analysis includes information such as:

    - Time spent across workflow states
    - Number of transitions
    - State re-entries
    - Flow irregularities

These metrics provide context about how the individual issue moved through the workflow.

For detailed explanations of the underlying flow metrics, see [Flow Metrics Overview.](flowMetricsOverview.md)

### 2. Complete Issue History

The history view displays the recorded changes for the selected issue in chronological order.

![Key indicators](../../static/img/historyList.png)

The table includes:

|Column | Description                   |
|------ |-------------------------------| 
|Date   | When the change occurred      |
|User   | User who performed the change |
|Field  | Field that was modified       |
|From   | Previous value                |
|To	    | New value                     |

This provides a detailed view of how the issue changed over time and makes it easier to investigate specific events.

## Field-Based Filtering

The history table can be filtered by the field that was changed.

The filter is generated dynamically from the issue's actual history. Only fields that have recorded changes are included.

For example:

    - If **Assignee** was changed, it appears as a filter option.
    - If **Priority** was never changed, it does not appear as a filter option.
    - If **Description** has no recorded changes, it is not included in the filter list.

This approach keeps the filter focused on information that is actually relevant to the selected issue.

### Why This Matters

Long Jira histories can contain a large number of unrelated events. When investigating a specific problem, such as an unexpected reassignment or priority change, manually reviewing the entire history can introduce unnecessary noise.

Filtering the history by field allows users to focus directly on the changes relevant to their investigation.

For example, a support or troubleshooting investigation can quickly isolate:

    - Status changes
    - Assignee changes
    - Priority changes
    - Resolution changes
    - Other fields with recorded historical activity

The absence of a field from the filter does not mean that the field does not exist on the issue. It only means that no changes to that field were recorded in the issue history.

## Typical Use Cases

Issue History can be useful for:

    - Troubleshooting unexpected issue behavior
    - Investigating workflow transitions
    - Reviewing reassignment or priority changes
    - Supporting incident investigations
    - Validating workflow behavior
    - Performing issue-level audits
    - Understanding the lifecycle of individual issues

## Summary

Issue History combines four capabilities in a single view:

    - Focused issue lookup by key
    - Issue-specific flow metrics
    - Chronological change history
    - Dynamic filtering based on recorded changes

Together, these features make it easier to move from **"something happened to this issue"** to **"exactly what happened, when, and who changed it."**