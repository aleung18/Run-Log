#!/bin/bash

# Strava Data Sync Script
# Run this whenever you want to pull the latest activities from Strava.
# Usage: just double-click this file or run `bash sync.sh` from the terminal.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV_PYTHON="/Users/ashtonleung/run log/test_streamlit_app/venv/bin/python"

echo "🏃 Syncing Strava data..."
cd "$SCRIPT_DIR"
"$VENV_PYTHON" main.py

if [ $? -eq 0 ]; then
    echo "✅ Sync complete! latest.csv is up to date."
else
    echo "❌ Sync failed. Check the output above for errors."
    exit 1
fi
