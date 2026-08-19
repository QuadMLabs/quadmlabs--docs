---
id: ppfa-flow-health
title: Flow Health Metrics
sidebar_label: Flow Health Metrics
---
# Flow Health Metrics

Flow Health provides a view of how work moves through the project, how long it takes to complete, and how consistent the delivery process is.

The analysis combines timing metrics, delivery percentiles, predictability, and flow efficiency to provide a broader view of workflow behavior.

![Key indicators](../../static/img/flowHealth.png)

## **1. Flow Timing Metrics**

These metrics describe the time an issue spends waiting, being worked on, and progressing through the complete lifecycle.

**Average Start Cycle Time**

Average time between issue creation and the first transition into the **In Progress** status category.

>```
> Start Cycle Time = Issue Created → First In Progress transition
>```

A high Start Cycle Time may indicate delays in:
    - Triage or intake
    - Prioritization
    - Assignment
    - Backlog management
    - Starting work on new issues

**Average Cycle Time**

Average time required to complete an issue after work has started.

>```
> Cycle Time = First In Progress transition → First Done transition
>```

A high Cycle Time may indicate:
    - Workflow bottlenecks
    - Blocked work
    - Delayed reviews or approvals
    - Excessive context switching
    - Rework

**Average Lead Time**

Average total time from issue creation until completion.

>```
> Lead Time = Issue Created → First Done transition
>```

Lead Time represents the complete elapsed time experienced by the requester or stakeholder, including waiting time and active work.

Conceptually:

>```
> Lead Time ≈ Start Cycle Time + Cycle Time
>```

The relationship provides a useful distinction between time spent waiting to start work and time spent actively progressing through the workflow.

## 2. Lead Time Percentiles

Percentiles provide additional context about the distribution of Lead Time values.

**P85 Lead Time**

The P85 value represents the Lead Time within which approximately 85% of completed issues were delivered.

It provides a more representative planning threshold than the average when delivery times contain significant variation.

**P95 Lead Time**

The P95 value represents the Lead Time within which approximately 95% of completed issues were delivered.

Because it considers the upper portion of the distribution, P95 provides a more conservative view of delivery time and is useful when evaluating longer-running work.

Comparing the average Lead Time with P85 and P95 helps identify how much variation exists across completed issues.

**Flow Predictability**

Flow Predictability is a derived metric that compares P85 Lead Time with the average Lead Time.

>```
> Flow Predictability = P85 Lead Time / Average Lead Time
>```

Values closer to 1.0 indicate that the P85 is relatively close to the average, suggesting lower variation in delivery times.

Higher values indicate that the upper portion of the Lead Time distribution is significantly larger than the average, suggesting greater variability.

**Predictability Thresholds**

The dashboard uses the following thresholds to provide a visual indication of delivery variability:

| Value   | Interpretation           |
|---------|--------------------------|
| ≤ 1.2   | Highly predictable flow  |
| ≤ 1.5   | Mostly predictable       |
| ≤ 2.0   | Noticeable variability   |
| > 2.0   | High variability         |
| No data | Insufficient information |

The color associated with the value provides a quick visual indication, while the numerical value provides the underlying measurement.

## 3. Interpreting Flow Health

The timing metrics provide different perspectives on the same workflow.

    - **Start Cycle Time** indicates how long work waits before being started.
    - **Cycle Time** indicates how long work takes once it has started.
    - **Lead Time** represents the complete elapsed time from creation to completion.

This distinction helps identify where delays are occurring.

For example, a high Start Cycle Time with a relatively low Cycle Time may indicate that the team can complete work efficiently once it starts, but work is spending too much time waiting to be picked up.

Conversely, a low Start Cycle Time combined with a high Cycle Time may indicate that work starts quickly but encounters delays during execution.

P85, P95, and Flow Predictability provide another dimension by showing how consistent those delivery times are across issues.

## 4. Work Delivered

The Work Delivered (%) chart represents the proportion of analyzed issues that were resolved cleanly.

![Key indicators](../../static/img/workDelivery.png)

>```
> Work Delivered (%) = Clean Resolved Issues / Total Issues Analyzed × 100
>```

A cleanly resolved issue is one that:

    - Reaches the Done status category.
    - Contains a valid Resolution.
    - Passes the consistency checks defined by the analysis.

The metric provides a view of delivery effectiveness by distinguishing completed work from completed work that contains identified inconsistencies.

## 5. Flow Efficiency 

Flow Efficiency represents the proportion of Lead Time spent in active work rather than waiting.

![Key indicators](../../static/img/flowEff.png)

>```
> Flow Efficiency = Sum of Cycle Time / Sum of Lead Time × 100
>```

Where:

    - **Cycle Time** represents the time from the first In Progress transition to the first Done transition.
    - **Lead Time** represents the time from issue creation to the first Done transition.

The metric therefore highlights the relationship between active execution time and total elapsed time.

**Interpretation**

| Flow Efficiency | General interpretation                |
|-----------------|---------------------------------------|
| > 40%           | Higher proportion of active work time |
| 20–40%          | Moderate waiting time                 |
| < 20%           | Significant waiting time              |

These thresholds are intended as practical indicators rather than universal benchmarks. The appropriate level of efficiency depends on the type of work and the workflow being analyzed.

## 6. Issue-Level Analysis

The Flow Health section also provides a detailed list of the issues included in the analysis.

![Key indicators](../../static/img/listFlowHealth.png)

The table combines standard Jira issue information with calculated flow metrics.

**Standard information**

    - Key
    - Summary
    - Priority
    - Reporter
    - Assignee
    - Status
    - Resolution
    
**Calculated information**

    - Inconsistent
    - Reopened
    - Reassigned
    - Changed Priority
    - Start Cycle Time
    - Cycle Time
    - Lead Time

The detailed view allows the aggregate metrics displayed in the dashboard to be traced back to individual issues.

The data can also be exported for further analysis, audits, or reporting.

## Using the Metrics for Process Improvement

The metrics can help identify different types of workflow problems.

### High Start Cycle Time

Potential areas to investigate:

    - Intake and triage processes
    - Backlog prioritization
    - Assignment practices
    - Work queues

### High Cycle Time

Potential areas to investigate:

    - Workflow bottlenecks
    - Work in progress
    - Approval or review stages
    - Blocked issues
    - Rework

### High Lead Time with Low Cycle Time

This may indicate that issues spend a significant amount of time waiting before work begins.

### High Lead Time and High Cycle Time

This may indicate delays both before and during active work.

### High Predictability Ratio

A high Flow Predictability value indicates greater variation in delivery times and may warrant investigation into unusually long-running issues, workflow variability, or inconsistent work patterns.

### Low Flow Efficiency

A low Flow Efficiency value indicates that a large proportion of total Lead Time is spent outside active work. This can help identify waiting, handoffs, queues, or other sources of delay.

The purpose of these metrics is therefore not only to measure performance, but to provide signals that can guide further analysis of the underlying process.