---
id: ppfa-issue-history
title: Issue History
sidebar_label: Issue History
---
# Issue History

The **Issue History** section allows users to search and analyze the complete change history of a specific issue within the current project.
This tool provides a detailed timeline of all recorded events—state transitions, field updates, user actions, and other modifications—so the user can understand exactly how the issue evolved over time.

![Key indicators](../../static/img/history.png)

**🔎 How It Works**

The interface consists of:

    - An Issue Key input field
    - A Search button

The user enters the issue key, clicks Search, and the system retrieves the issue’s full historical activity.

:::warning
⚠️This tool only supports searching by Issue Key. Searching by summary, reporter, description, or any other attribute is not supported.
:::

:::warning
⚠️The lookup is restricted to the current project. Since the app operates at a project level, searching for issues belonging to other projects is not allowed.
:::

---

## 📌 What the User Sees After Searching

Once the issue is found and analyzed, two main outputs are displayed:

---

### 1. Flow Health Metrics Summary (Issue-Specific)

A compact summary of the Flow Health Metrics, but calculated only for the selected issue.

This includes indicators such as:

    - Time spent across states
    - Number of transitions
    - State re-entries
    - Flow irregularities for that specific issue

![Key indicators](../../static/img/historyFlow.png)

:::tip
💡For detailed explanations of how Flow Health Metrics work, users should refer to the dedicated Flow Metrics Overview documentation section.
:::

---

### 2. Complete Issue History Table

A chronological table showing every event recorded in the issue’s history.

The table includes the following columns:

    - Date – When the event occurred
    - User – Who performed the action
    - Field – The field that was changed (e.g., status, assignee, priority)
    - From – Original value
    - To – New value

![Key indicators](../../static/img/historyList.png)

This provides a transparent, audit-friendly view of the issue lifecycle.

---

## 🔽 Field-Based Filtering

The history table includes a field filter, allowing the user to narrow down events by the field that changed.

Only fields that actually appear in the issue’s history are included in the filter list. This keeps the interface lightweight and avoids unnecessary data loading.

For example:

    - If the Assignee field was updated at least once → it will appear in the filter.
    - If the issue never had any change in Description → Description will not appear in the filter list.
    - This prevents unnecessary requests to load all Jira fields and keeps the filtering efficient.

:::tip
This filtering logic is based on real-world experience.
In Jira, when an issue has a long history, and you need to investigate changes to a specific field (for example during support or debugging), Jira does not provide a way to filter the history. You are forced to scroll through every single entry manually.
This makes it very easy to miss an important change, especially when unrelated events create noise.

By displaying only the fields that actually appear in the history and allowing filtering by them, this tool prevents that problem—letting users focus only on the relevant events and reducing the risk of overlooking critical information.
:::

:::warning
⚠️The absence of a field in the filter does not mean the issue does not have that field—it only means no changes were recorded for it in the issue’s history.
:::

---

## 🧭 Summary

The Issue History section provides a precise and efficient way to examine how an issue has evolved over time through:

    - A focused search by key
    - Issue-specific Flow Health Metrics
    - A detailed chronological change log
    - A dynamic filter based on actual historical fields

This makes it a powerful tool for audits, troubleshooting, workflow validation, and understanding issue behavior in depth.
