# Contributing to TURING

Thanks for your interest in contributing to TURING — the autonomous state machine for cognitive continuity in Claude Code!

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Make your changes
4. Test with Claude Code locally

## Development Workflow

```bash
# Install the plugin locally
claude /install ./

# Clear plugin cache after changes
rm -rf ~/.claude/plugins/cache/turing*

# Start fresh Claude session to pick up changes
claude

# Test hooks by triggering compaction
/compact
```

### Testing Scripts Directly

```bash
# Test capture (PreCompact)
echo '{"session_id":"test-123","trigger":"auto","transcript_path":""}' | \
  bash ./claude-code/plugins/turing/scripts/capture-context.sh

# Test restore (SessionStart - startup)
echo '{"session_id":"new-session","source":"startup"}' | \
  bash ./claude-code/plugins/turing/scripts/restore-context.sh

# Test restore (SessionStart - compact)
echo '{"session_id":"test-123","source":"compact"}' | \
  bash ./claude-code/plugins/turing/scripts/restore-context.sh

# Test status
bash ./claude-code/plugins/turing/scripts/turing-status.sh
bash ./claude-code/plugins/turing/scripts/turing-status.sh --global
```

## How to Contribute

### Reporting Bugs

- Check existing issues first to avoid duplicates
- Use a clear, descriptive title
- Include steps to reproduce the issue
- Include relevant debug output (see CLAUDE.md for debug mode)
- Describe expected vs actual behavior

### Suggesting Features

- Open an issue describing the feature
- Explain the use case and why it would be valuable
- Consider impact on token efficiency and dependencies
- Be open to discussion about implementation approaches

### Pull Requests

1. Create a branch from `main` for your changes
2. Make your changes with clear, focused commits
3. Test all scripts locally (capture, restore, status)
4. Ensure macOS and Linux compatibility
5. Open a PR with a clear description of changes
6. Link any related issues

## Code Style

### Bash Scripts

- Use `set -e` for early exit on errors
- Handle TTY detection gracefully (`|| true`)
- Use single-quoted `'PYEOF'` for Python heredocs
- Pass variables via environment, not heredoc substitution
- Support both macOS and Linux (e.g., `sed -i` differences)
- Avoid bash 4+ features (macOS ships bash 3.2)

### State Files

- Use YAML frontmatter for machine-parseable metadata
- Include priority markers (`<!-- PRIORITY: LEVEL -->`)
- Generate checksums for verification

See [CLAUDE.md](CLAUDE.md) for detailed development guidelines.

## Areas for Contribution

- **Token optimization**: Improve priority filtering or compression
- **Session discovery**: Better heuristics for multi-terminal scenarios
- **Decision extraction**: Additional patterns for auto-extraction
- **Platform support**: Windows compatibility (PowerShell)
- **Documentation**: Examples, edge cases, troubleshooting
- **Testing**: Automated test suite

## Plugin Structure

```
claude-code/plugins/turing/
├── .claude-plugin/
│   └── plugin.json           # Plugin manifest
├── hooks/
│   └── hooks.json            # Hook definitions
├── scripts/
│   ├── capture-context.sh    # PreCompact handler
│   ├── restore-context.sh    # SessionStart handler
│   └── turing-status.sh      # Status utility
├── commands/
│   ├── turing-save.md        # Manual save command
│   └── turing-status.md      # Status command
└── templates/
    └── turing-precompact.md  # Protocol template
```

## Questions?

Open an issue or reach out to the maintainers. We're happy to help!
