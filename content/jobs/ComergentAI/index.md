---
date: '2025-12-01'
title: 'Founding Engineer'
company: 'Comergent AI'
location: 'Hyderabad, India'
range: 'December 2025 - Present'
url: 'https://comergentai.com/'
---

- Reduced AI batch API calls by 73% by replacing naive polling with self-scheduling EventBridge rules using exponential backoff (2ⁿ mins, capped at 120), with provider-agnostic abstraction supporting Claude, OpenAI, and Gemini batch APIs
- Scaled LLM content generation to 100+ Shopify stores concurrently by building a LangGraph multi-provider orchestration agent (Python, FastAPI, asyncio) with dual-provider structured output abstraction — OpenAI uses native Structured Outputs, Anthropic uses tool_use with recursive schema patching, both returning identical Pydantic objects
- Built GEO visibility report engine running 12 parallel LLM calls per report across Claude, GPT-4o, Gemini, and Perplexity with a custom citation scorer normalizing patterns into a 0–100 GEO score
- Published npm MCP package (@qressy/qressy-meta-ads-mcp) exposing 40+ Meta Ads tools to Claude Desktop and Cursor via JSON-RPC 2.0 stdio-to-HTTP bridge with dynamic tool discovery from remote Lambda — full MCP protocol under 200 lines of TypeScript
- Owned end-to-end engineering: architecture decisions, production deployments, code reviews, and customer technical escalations across a platform supporting $1M+ GMV
