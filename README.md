# Faculty Workshop website

Public website: https://tianhan126.github.io/faculty-codex-101-workshop/

Published on 2026-11-23. Verified in an unsigned-in browser: all four pages load, all 11 Download buttons save files matching the originals, prompt copying works, and the mobile layout has no horizontal overflow.

This folder is a self-contained static website. Keep all its files together when uploading to GitHub Pages. No build tools, external libraries, or API keys are required.

- `index.html`: workshop page
- `cases.html`, `policies.html`, `blueprint.html`: reference document viewers
- `files/`: six original downloadable workshop files
- `docs/`: three original downloadable Markdown documents
- `assets/`: local illustrations and images
- `styles.css`, `app.js`: layout and interactions
- `downloads.js`: bundled file bytes for direct downloads, including local-file viewing

After replacing any file in `files/` or `docs/`, run `python3 prepare_downloads.py` from this folder to refresh `downloads.js`. Commit the original files and the refreshed bundle together.

For a local preview, run `python3 -m http.server 8770` in this folder, then open `http://127.0.0.1:8770/`.

The Padlet board and links to external examples require internet access. Everything else is stored in this folder.
