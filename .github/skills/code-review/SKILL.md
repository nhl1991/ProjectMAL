---
name: code-review
description: Review pull requests for correctness, security, type safety,
  React/Next.js architecture, and performance.
---

# Code Review Procedure

When reviewing a pull request:

1. Check for functional bugs and edge cases.
2. Check TypeScript type safety.
3. Check whether untrusted input is validated on the server.
4. Check Server/Client Component boundaries.
5. Check React hooks and unnecessary re-renders.
6. Check TanStack Query cache/query-key consistency.
7. Check for security vulnerabilities.
8. Ignore purely stylistic issues unless they affect maintainability.
9. Explain issues in Korean.
Prioritize findings:
- Critical: security or data corruption
- High: functional bugs
- Medium: maintainability or performance
- Low: minor improvements
