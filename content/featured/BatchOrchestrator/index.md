---
date: '1'
title: 'Comergent Batch Orchestrator'
cover: './batch-orchestrator.jpeg'
# github: 'https://github.com/sanjay-gangishetty/10xgeo-batch-orchestrator'
external: 'https://comergent.ai/'
cta: ''
tech:
  - Node.js
  - AWS Lambda
  - EventBridge Scheduler
  - Anthropic Claude
  - OpenAI
  - Google Gemini
---

Event-driven AI batch job lifecycle manager supporting Claude, OpenAI, and Gemini batch APIs. Replaced naive polling with self-scheduling EventBridge rules using exponential backoff (2ⁿ mins, capped at 120), achieving a 73% reduction in API calls. Encrypted API keys in scheduler payloads, auto-deletes rules on job completion. Fully provider-agnostic abstraction under 200 lines of TypeScript.
