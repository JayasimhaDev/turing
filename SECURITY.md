# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in TURING, please report it responsibly:

1. **Do not** open a public issue
2. Email the maintainers directly or use GitHub's private vulnerability reporting feature
3. Include a detailed description of the vulnerability
4. Provide steps to reproduce if possible

We will respond within 48 hours and work with you to understand and address the issue.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | Yes                |

## Security Considerations

### Plugin Architecture

TURING is designed with security in mind:

- **No external dependencies** — Only uses bash, Python 3, and git (pre-installed on macOS/Linux)
- **No data collection** — All state stays local in `.claude/sessions/`
- **No network calls** — The plugin makes no network requests
- **No background processes** — Runs only when hooks fire
- **Open source** — Full transparency for security audits

### State Storage

TURING stores session state locally:

```
.claude/sessions/{session_id}/
├── state.md          # Session state (markdown)
├── adrs.md           # Architecture decisions
├── metadata.json     # Session metadata
└── archive/          # Previous states
```

**Security properties:**
- Files are stored in the project's `.claude/` directory
- No data leaves your machine
- State files are plain text (auditable)
- Checksums verify integrity

### Script Execution

TURING executes bash scripts via Claude Code's hook system:

- Scripts run with your user permissions
- No elevated privileges required
- No system modifications outside `.claude/`
- Scripts are read-only (don't modify your code)

### Sensitive Data

**TURING does NOT capture:**
- API keys or credentials
- Environment variables
- File contents (only paths)
- Full conversation transcripts (only decision patterns)

**What IS captured:**
- Git state (branch, recent commits, uncommitted files)
- Session metadata (timestamps, TTY, compaction count)
- Auto-extracted decisions (pattern-matched phrases)
- Project identification (directory name, package.json name)

### Transcript Access

When `transcript_path` is provided by Claude Code:
- TURING reads the last 500 lines for decision extraction
- Only pattern-matched phrases are stored (not full content)
- Original transcript is never modified or copied

## Best Practices for Users

1. **Review state files** — Check `.claude/sessions/` to understand what's captured
2. **Git ignore** — Add `.claude/` to `.gitignore` if you don't want state in version control
3. **Clean up** — Periodically remove old sessions: `rm -rf .claude/sessions/*/archive/`
4. **Audit scripts** — Review the bash scripts before installation
5. **Report issues** — Help us improve by reporting any security concerns

## Data Retention

TURING retains:
- Current session state (indefinitely, until overwritten)
- Archived states (indefinitely, in `archive/` subdirectory)
- Session index (`.claude/sessions/index.json`)

To clear all TURING data for a project:
```bash
rm -rf .claude/sessions/
```

## Permissions

TURING requires:
- Read access to project directory (git state)
- Write access to `.claude/sessions/` (state storage)
- Execute access for bash and Python 3

No other permissions are needed or requested.
