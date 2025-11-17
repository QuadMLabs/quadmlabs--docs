---
id: ppfa-key-indicators-period-analyzed
title: Key Indicators for the Period Analyzed
sidebar_label: Key Indicators for the Period Analyzed
---
# Key Indicators for the Period Analyzed

This section presents six key indicators that summarize the project’s performance for the selected period.

![Key indicators](../../static/img/keyInd.png)

---

## 1. Period Analyzed

Displays the start and end dates of the selected period.

Example:

>`2024-07-01 - 2024-09-30`

---

## 2. Real Weeks

Represents the total number of weeks included in the selected period.

Example:

>`If the user selects Last 3 months, the period contains approximately 12 weeks.`

---

## 3. Active Weeks

Indicates how many of the weeks in the selected period the project was actually active.

Example:

>`If the user selects Last 3 months (12 weeks), but the project began operations only 8 weeks ago:`

>```javascript
> Active weeks = 8
> ```

All performance calculations use Active Weeks, not Real Weeks.

When the selected period fully matches the project's active timeline:

>```
> Real Weeks = Active Weeks
> ```

---

## 4. Throughput bruto

**What is Throughput?**

Throughput represents the number of items (issues) completed during a given period.  
It is a measure of delivery capacity.

**Definition**

Throughput bruto includes all resolved issues, even those that contain inconsistencies.

**Formula**

>```
> Throughput bruto = Total Resolved Issues / Active Weeks
> ```

---

## 5. Throughput real

**Concept**

Throughput real reflects the team's clean performance.  
It considers only the issues resolved correctly, without inconsistencies.

**Formula**

>```
> Throughput real = Correctly Resolved Issues / Active Weeks
> ```

---

## 6. Inconsistency (%)
**What is an inconsistent issue?**

An inconsistent issue is one that contains errors such as incorrect status, bad resolution, missing information, wrong categorization, or any data-quality irregularity.

**Definition**

Indicates what percentage of all resolved issues contain inconsistencies.

**Formula**

>```
> Inconsistency (%) = (Inconsistent Issues / Total Resolved Issues) * 100
>```

---

## Interpretation of Throughput and Inconsistency

:::info
💡 **Purpose**: Help users clearly understand what these metrics say about performance and data quality.
:::

Throughput and inconsistency together provide a complete view of how the team is performing.  
A **high throughput** indicates stronger delivery capacity — the team is completing more work per active week.
However, throughput alone does not measure correctness or quality.

A **high inconsistency percentage** highlights that many of those completed issues contain errors or irregularities, such as incorrect statuses or wrong resolutions. In this situation:

- The team may appear productive, but the work may require rework.
- Real throughput decreases because only correctly resolved issues count as clean output.
- Data becomes unreliable for reporting, forecasting, or continuous improvement.

>✔️ **Ideal scenario**:  
>**High real throughput + Low inconsistency** = strong productivity and clean, reliable delivery.

---

## How to Address High Inconsistency Levels

:::danger
🚨 **When inconsistency is high, you likely have process or configuration issues.**
Below are recommended actions to improve data quality and reduce inconsistent resolutions.
:::

**1. Review and tighten workflow configuration**

    - Ensure closing statuses require a valid resolution.
    - Remove invalid or unused resolutions from transitions.
    - Prevent transitions from skipping required final steps.

**2. Strengthen governance around the Resolution field**

    - Restrict permissions so only authorized roles can set or modify the Resolution.
    - Prevent the field from being manually editable at any time.
    - Use post-functions to automatically set consistent resolutions when appropriate.

**3. Add validation rules and automation**

    - Add workflow validators to ensure required fields are filled before closing.
    - Use automation rules to enforce consistent categorizations or fix common mistakes.
    - Automatically flag or reopen issues with incorrect resolutions.

**4. Establish process discipline**

    - Train the team on proper closing practices and the correct use of resolutions.
    - Maintain and communicate a clear “Definition of Done.”
    - Conduct periodic reviews of inconsistent issues to identify patterns.
    
> **⭐ Goal: Reduce rework, improve reporting accuracy, and ensure the system reflects the true state of work.**