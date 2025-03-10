# esg-carbon-pwa
# 景沛ESG 碳排放計算器

## Overview
This is a Progressive Web App (PWA) for calculating carbon emissions. It is designed to work offline and can be installed on mobile devices and desktops.

## Features
- Calculate carbon emissions from various activities.
- Installable PWA.
- Works offline with cached assets.

## Installation
To install the PWA, follow these steps:
1. Open the [PWA link](https://jpesg.netlify.app/) in your browser.
2. Click on the install button in the browser's address bar or in the footer of the app.

## Development Setup
To set up the development environment, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Sethjesus/esg-carbon-pwa.git
   cd esg-carbon-pwa
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Service Worker
The service worker is configured to cache essential assets for offline use. It caches the following resources:
- `/`
- `/index.html`
- `/styles.css`
- `/manifest.json`
- `/icon-192.png`
- `/icon-512.png`

## Testing
To test the PWA, open it in your browser and perform the following tasks:
1. Install the PWA on your device.
2. Disconnect from the internet and verify that the app works offline.
3. Use Chrome DevTools to simulate different network conditions and check the service worker's behavior.
4. Run a Lighthouse audit to get recommendations for improvements.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
