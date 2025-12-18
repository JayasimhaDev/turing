---
description: Display TURING memory status — sessions, tokens, and ADRs for current project or workstation.
argument-hint: "[--global]"
---

# TURING Status — Memory Retrieval

Display the current state of TURING's cognitive memory system.

## Instructions

Run the status script to show memory usage:

```bash
bash "${CLAUDE_PLUGIN_ROOT}/scripts/turing-status.sh"
```

Then summarize the output for the user, highlighting:
1. **Current Session** — Active session state and token usage
2. **Project Sessions** — All sessions for this project
3. **Workstation Sessions** — Sessions across all projects (if requested)

If the user asks for "workstation" or "global" memory, include cross-project information.
