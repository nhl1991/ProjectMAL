# Project Instructions

## Code Review Guidelines

When reviewing pull requests:

- Write all review comments in Korean. Keep code, commands, file paths, and package names as-is.
- Prioritize correctness, regressions, and BFF boundary safety.
- Check that the MyAnimeList client ID never reaches the client bundle.
- Check that request parameters are validated before being forwarded to the MyAnimeList API.
- Check TypeScript type safety.
- Identify potential performance regressions.
- Avoid comments about formatting handled by linters.

## Review Skill

For detailed reviews, follow:
.agents/skills/code-review/SKILL.md
