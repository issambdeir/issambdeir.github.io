# Portfolio Website

A simple, no-build-step portfolio site: plain HTML, CSS, and JS.

## Editing

- **Your name, bio, tagline, contact links:** edit `index.html` directly (look for "Your Name", the hero subtitle, and the links in the Contact section).
- **Projects:** edit `js/projects-data.js`. Each project is one object in the `projects` array — copy an existing one and fill in your own `name`, `description`, `tags`, `image`, `liveUrl`, and `codeUrl`. Leave `image` as `""` to use an auto-generated placeholder, or point it at a file in `images/` (e.g. `"images/my-project.png"`). Leave `liveUrl` or `codeUrl` as `""` to hide that link.
- **Colors/theme:** edit the CSS variables at the top of `css/style.css` (`:root` and the dark-mode blocks).

No build step — just save and refresh the page.

## Previewing locally

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

If your repo is named `yourusername.github.io`, GitHub Pages serves it automatically at `https://yourusername.github.io`. For any other repo name, enable Pages in the repo's Settings → Pages, set the source to the `main` branch, and your site will be live at `https://yourusername.github.io/repo-name`.
