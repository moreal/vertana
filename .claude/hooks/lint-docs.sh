#!/bin/bash
set -e

# Read JSON input from stdin
input=$(cat)

# Extract file_path from tool_input using jq (or basic parsing)
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# Only process markdown files in docs/
if [[ "$file_path" == */docs/*.md ]]; then
  cd "$(dirname "$0")/../../docs"
  pnpm install --quiet 2>/dev/null || true
  pnpm eslint --fix "$file_path" 2>/dev/null || true
fi

exit 0
