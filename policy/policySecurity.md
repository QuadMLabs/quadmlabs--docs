---
id: security-policy
title: Security Policy
description: Security Policy for QuadMLabs
---

# Security Policy – QuadMLabs Apps for Atlassian

*Last updated: 20/11/2025*

At QuadMLabs, we prioritize the security of our applications and the data processed within the Atlassian ecosystem. Our security practices are designed to ensure the confidentiality, integrity, and availability of all information accessed by our apps.

## 1. Platform Security

    - All our applications are built using **Atlassian Forge**, which provides:
    - Sandboxed, isolated execution environments
    - Encrypted storage provided by Atlassian
    - No direct network access unless explicitly permitted by Atlassian
    - Automatic application and infrastructure updates managed by Atlassian

This allows our apps to operate securely without exposing customer data to external systems.

## 2. Data Handling & Protection

    - Our apps **do not store or transfer Jira or Confluence data to external servers.**
    - Any temporary data is processed only in-memory and never written to persistent storage unless required for functionality.
    - All communication between the app and Atlassian APIs uses **TLS/HTTPS encryption.**

## 3. Access Control

    - Permissions requested by our apps follow the **principle of least privilege**, meaning we only request the minimum scopes required for functionality.
    - Authentication and authorization are handled by **Atlassian’s OAuth and Forge security model.**
    - No credentials or tokens are stored outside the Forge environment.

## 4. Secure Development Practices

    - Regular dependency updates and vulnerability scanning
    - Code reviews focused on security controls
    - Use of secure coding best practices, including validation, sanitization, and permission checks
    - Periodic inspection against Atlassian Marketplace security requirements

## 5. Vulnerability Management

    - We monitor security advisories and apply patches promptly.
    - Any issue reported through Atlassian’s **Marketplace Security Bug Bounty Program** receives immediate attention.
    - We follow a defined process for assessing, prioritizing, and remediating vulnerabilities.

## 6. Incident Response

If a security incident occurs:
    - We investigate immediately
    - Apply corrective measures
    - Notify affected customers in accordance with Atlassian Marketplace guidelines

## 7. Personnel Access

    - Only authorized personnel can access management dashboards or configurations related to the app
    - No staff have access to customer Jira/Confluence data, as it remains within Atlassian Cloud
    - Access is logged and monitored

## 8. Contact

For any security-related inquiries or reports, contact us at:  
📧 admin@quadmlabs.com