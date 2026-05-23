# SIX Lab Website

The Sensing, Intelligence and eXperience (SIX) Lab operates under the Department of Electrical Engineering and Computer Science at the University of Michigan. We develop innovative sensing technologies, personalized signal processing models, and custom device form factors to enable continuous health monitoring and advanced human-computer interaction. Our interdisciplinary team bridges hardware and software innovations in novel sensing, fabrication, and interaction design, collaborating closely with UMich faculty in engineering and medicine.

For more information, please check our website: https://sixlab-eecs.com!

## 🛠️ Updates

To update the website:

1. Run the local development server to preview your changes:
   ```bash
   npm run dev # preview changes locally
   ```

2. Once you're satisfied with the updates, deploy them to GitHub Pages:
    ```bash
   npm run deploy # build and push updates to GitHub Pages
   ```
   For window, change package.json
   ```
   "predeploy": "npm run build && echo sixlab-eecs.com > dist/CNAME && cp dist/index.html dist/404.html"
   ``` 
   to
   ```
   "predeploy": "npm run build && node -e \"const fs = require('fs'); fs.writeFileSync('dist/CNAME', 'sixlab-eecs.com\\n'); fs.copyFileSync('dist/index.html', 'dist/404.html');\"",
   ```

## TODO
1. Fix mobile version (menu)
2. Fix image not loaded issue in publication