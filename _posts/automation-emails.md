---
title: "Automating Change Emails with PowerShell"
excerpt: "How I templated patch windows and turned them into Outlook emails with validation + logs."
categories: [automation, powershell]
tags: [m365, excel, outlook]
---

In this post I walk through the evolution of my patch-window email workflow: from manual formatting in Outlook to a validated PowerShell pipeline reading from Excel and emitting consistent emails.

**Highlights**
- Hardened prompts and input validation
- Logging and dry-run mode
- Safer defaults, fewer foot-guns

