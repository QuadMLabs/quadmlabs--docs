---
id: ppfa-quick-cards
title: Quick Cards
sidebar_label: Quick Cards
---
# Quick Cards Metrics

This section presents a set of quick, high-impact indicators. These cards are visually larger and use stronger colors to highlight operational behavior during the selected period.

![Key indicators](../../static/img/quickCards.png)

---

## **1. Issues Created**

Represents all issues created within the selected period.

---

## **2. Issues In Progress**

Counts all issues currently in any status belonging to the **In Progress** status category.

This includes statuses such as:

* QA
* Review
* In Development
* Testing

> The specific status does not matter; the category is what determines inclusion.

---

## **3. Issues Resolved**

All issues transitioned into the **Done** status category and Resolution field **!= null**.

This includes:

* Completed
* Cancelled
* Rejected
* Any status under "Done"

> This metric includes both consistent and inconsistent resolutions.

---

## **4. Inconsistent Issues**

Issues resolved with data or process inconsistencies. Three groups are analyzed:

### **Group 1: Resolved but status category is NOT Done**

* Transitioned to a resolution value but final status does not belong to **Done**.

### **Group 2: Not Resolved but status category IS Done**

* Status category indicates closure, but the Resolution is missing.

### **Group 3: Resolved AND Done category but with problematic details**

* Resolution date is earlier than creation date.
* The issue was created and immediately auto-transitioned directly to Done.

> These represent data-quality or workflow-governance issues.

---

## **5. Reopened Issues**

Issues that:

* Reached a Done category status with a valid Resolution
* Later moved to a non-Done status category
* And their Resolution was cleared or changed back to **NULL**

---

## **6. Issues with Priority Change**

Issues where the **Priority** field changed during their lifecycle.

---

## **7. Unassigned Issues**

Issues that currently have **no assignee**.

Important considerations:

> * If an issue had an assignee and was later cleared, it still counts as unassigned.

---

## **8. Reassigned Issues**

Issues where the assignee was changed from one user to another.

---

## **Interpretation of These Quick Metrics**

:::info
💡 These quick cards highlight volume, movement, data behavior, team activity, and process integrity.
:::

Together, these metrics help users understand how work is entering, moving through, and exiting the system.

**A high number of created issues may indicate increasing demand**, while **many** `in-progress` items might suggest **capacity pressure**. 

**A large volume of resolved issues reflects delivery activity**, but **inconsistent or reopened issues** highlight underlying **process or quality problems**.

**Priority changes and reassignment counts** indicate how often the work is being reshaped or redirected, which may signal **shifting requirements or unclear ownership**. 

Lastly, **many unassigned issues** may reflect **delays, lack of ownership, or poor intake practices**.

---

## **How to Improve These Metrics**

:::tip
⭐ These areas can be optimized through workflow governance, better intake practices, and stronger field validation.
:::

### **Improvement Recommendations**

* **Review and enforce workflow configuration** to prevent improper transitions or bypasses.
* **Require and validate Resolution values** for all Done-category transitions.
* **Restrict editing of Resolution and Priority fields** to prevent unauthorized changes.
* **Improve assignment discipline** by ensuring each issue receives an immediate owner.
* **Monitor and reduce excessive priority changes**, which often signal unclear requirements.
* **Analyze reopened issues** to identify problematic steps or misunderstood closure criteria.
* **Identify inconsistencies early** through automation rules, validators, and periodic audits.
* **Limit auto-transitions** or reconfigure them to prevent premature or invalid closures.
* **Provide team training** on proper workflow usage and Definition of Done.

> ✔️ The goal is to reduce noise, prevent rework, and ensure the issue lifecycle reflects real work progress accurately.
