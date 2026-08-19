---
id: ppfa-key-indicators-period-analyzed
title: Key Indicators for the Period Analyzed
sidebar_label: Key Indicators for the Period Analyzed
---
# Key Indicators for the Period Analyzed

The dashboard provides a set of indicators that summarize project activity and delivery performance for the selected analysis period.

These metrics establish the context for the other analyses in the project by defining the period being evaluated, the project's active time, delivery throughput, and the presence of data inconsistencies.

![Key indicators](../../static/img/keyInd.png)

## 1. Period Analyzed

Defines the start and end dates used for the analysis.

Example:

>```
> 2024-07-01 - 2024-09-30
>```


All metrics presented by the dashboard are calculated within this period.

## 2. Real Weeks

Represents the total number of weeks included in the selected analysis period.

For example, a three-month analysis period contains approximately twelve weeks

Real Weeks provides the overall time span selected by the user.

## 3. Active Weeks

Represents the number of weeks during which the project was actually active within the selected period.

For example, if a twelve-week analysis period is selected but the project only became active eight weeks ago:

>```
> Active Weeks = 8
>```

Performance calculations use Active Weeks rather than Real Weeks.

When the selected period fully overlaps the project's active timeline:

>```
> Real Weeks = Active Weeks
>```

This distinction prevents periods in which no project activity occurred from artificially reducing performance metrics.

## 4. Gross Throughput

Throughput represents the amount of work completed during a given period.

**Gross Throughput** includes all resolved issues, including issues identified as inconsistent.

>```
> Gross bruto = Total Resolved Issues / Active Weeks
> ```

## 5. Net Throughput

**Net Throughput** represents the volume of work completed without identified inconsistencies.

>```
> Net Throughput = Correctly Resolved Issues / Active Weeks
> ```

Comparing Gross Throughput with Net Throughput provides additional context about the quality of the reported delivery.

A high gross throughput combined with a significantly lower net throughput may indicate that a considerable portion of completed work contains inconsistencies.

## 6. Inconsistency (%)

An inconsistent issue is an issue that contains one or more data or process irregularities, such as an incorrect status, invalid resolution, missing information, incorrect categorization, or other conditions identified by the analysis logic.

The **Inconsistency %** represents the proportion of resolved issues that contain these irregularities.

>```
> Inconsistency (%) = (Inconsistent Issues / Total Resolved Issues) * 100
>```

A lower percentage indicates that a greater proportion of completed issues conforms to the criteria used by the analysis.

## Interpreting the Indicators

Gross Throughput and Net Throughput should be considered together with Inconsistency %.

A high Gross Throughput indicates that a significant amount of work was completed during the active period. However, throughput alone does not indicate whether all completed issues were processed consistently.

For example:

- **High Gross Throughput + Low Inconsistency** indicates strong delivery volume with relatively clean data.
- **High Gross Throughput + High Inconsistency** indicates high delivery volume but potential process or data-quality concerns.
- **Low Gross Throughput + Low Inconsistency** indicates lower delivery volume with relatively consistent data.
- **Low Gross Throughput + High Inconsistency** may indicate both delivery and process-quality concerns.

The distinction between Gross and Net Throughput therefore provides a more complete view of delivery performance than throughput alone.

## Addressing High Inconsistency

A high inconsistency rate may indicate opportunities to improve workflow configuration, governance, or process discipline.

Potential areas for investigation include:

**1. Workflow configuration**

    - Ensure closing statuses require appropriate resolutions.
    - Remove invalid or unused resolutions from transitions.
    - Prevent transitions from bypassing required final steps.

**2. Resolution Governance**

    - Restrict who can modify the Resolution field.
    - Prevent inappropriate manual changes.
    - Use workflow logic or automation where appropriate to maintain consistency.

**3. Validation and Automation**

    - Add validators for required information before closing issues.
    - Use automation to enforce consistent categorization.
    - Identify or flag issues with inconsistent resolutions.

**4. Process Discipline**

    - Establish clear closing practices.
    - Maintain a consistent Definition of Done.
    - Review recurring inconsistencies to identify process patterns.
    
> **The objective is not simply to reduce the inconsistency percentage, but to improve the reliability of the project data and reduce rework.**