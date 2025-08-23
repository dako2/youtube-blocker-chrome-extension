# YouTube Blocker Chrome Extension

A simple Chrome extension that blocks access to YouTube to help you stay focused and productive.

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/00f4a5c4-6839-44a6-92e0-4af62a02b49c" />

Privacy Policy for YouTube Blocker – Focus & Self Care

Last updated: August 2025

This Chrome extension is designed to help users focus and practice digital self-care by blocking access to YouTube.

Information Collection and Use

The extension does not collect, store, transmit, or share any personal information.

The only data stored is limited to local user preferences (for example, whether blocking is enabled or disabled), saved in Chrome’s storage API.

All processing takes place locally in your browser. No data is sent to external servers.

Permissions

Declarative Net Request (DNR): Used to block or redirect requests to YouTube domains.

Host permissions (*://*.youtube.com/*): Required so the block applies specifically to YouTube.

Storage: Used only to remember whether blocking is on/off.

Third Parties

The extension does not include ads.

The extension does not use analytics or tracking tools.

No data is sold, shared, or transmitted to any third party.

Changes

If this policy changes in the future, updates will be published here.

Contact

If you have questions, you may contact the developer at: qitang2023 at gmail dt com

## Features

- Blocks all YouTube domains (youtube.com, www.youtube.com, m.youtube.com)
- Shows a custom blocked page with motivational message
- Toggle blocking on/off via popup interface
- Clean, modern UI design

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the extension folder
4. The YouTube Blocker extension will be added to your browser

## Usage

- Click the extension icon in the toolbar to open the popup
- Use the toggle button to enable/disable YouTube blocking
- When enabled, attempting to visit YouTube will redirect to a blocked page
- The extension remembers your preference across browser sessions

## Files

- `manifest.json` - Extension configuration
- `rules.json` - Declarative net request rules for blocking
- `popup.html` - Extension popup interface
- `popup.js` - Popup functionality
- `background.js` - Background script for managing blocking state
- `blocked.html` - Page shown when YouTube is blocked

## Permissions

- `declarativeNetRequest` - Required for blocking web requests
- `storage` - Required for saving user preferences
- `host_permissions` - Required for accessing YouTube domains
