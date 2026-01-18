---
name: beads-tracker
description: Persistent issue tracking across sessions using beads
---

# Beads Issue Tracker

You have access to the `bd` command-line tool for persistent issue tracking.

## Session Start Protocol
1. Run `bd ready --json` to see ready tasks
2. Run `bd list --status in_progress --json` for active work
3. Run `bd show <id>` to get full context on issues

## During Development
When you discover issues:
- File with: `bd create "title" --deps discovered-from:parent-id -p priority`
- Link discoveries to their parent with discovered-from

## Before Session End
Update active issues with:
- COMPLETED: what was finished
- KEY DECISION: important choices made
- IN PROGRESS: current state
- BLOCKERS: what's preventing progress
- NEXT: what should happen next

Use: `bd update <id> --notes "..."`
