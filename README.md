# SharePoint Video Skip Arrow

Nobody wants to stretch their fingers for cumbersome default shortcuts just to seek through a video. This lightweight browser extension maps the Left Arrow (←) and Right Arrow (→) keys directly to SharePoint's native 10-second skip buttons, alongside the Spacebar for quick play and pause, working exclusively on *.sharepoint.com sites.

---

## Features

- **Intuitive Seeking:** Use `←` to skip back 10s and `→` to skip forward 10s.
- **Input & Shortcut Safe:** Automatically ignores arrow presses when typing in comments, search bars, or text fields, as well as when holding modifier keys (Shift, Ctrl, Alt, Cmd).
- **Lightweight:** Pure JavaScript content script (Manifest V3) with zero external dependencies.


---

## Installation & Usage

1. **Download:** Click **Code** > **Download ZIP** on this GitHub repo, then unzip it into a folder (or clone it).
2. **Open Extensions:** In your browser (Chrome, Edge, Brave), go to:
   - `chrome://extensions/` or `edge://extensions/`
3. **Enable Developer Mode:** Turn on the **Developer mode** toggle in the top-right corner.
4. **Load Unpacked:** Click the **Load unpacked** button and select the unzipped project folder (the one containing `manifest.json`).
5. **Refresh & Enjoy:** Refresh your Microsoft 365 SharePoint video tab—tada! You can now use `←` and `→` to skip 10 seconds.