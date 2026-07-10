# Diary of a Crypto Guy

A minimal, static diary site. No build tools, no frameworks — just four files.

```
index.html    the page shell (edit rarely — title/tagline live here)
style.css     the beige theme (edit rarely — colours are all at the top)
entries.js    YOUR DIARY. Edit this every time you write a new entry.
script.js     turns entries.js into the page (you shouldn't need to touch it)
```

## Writing a new entry

Open `entries.js`. At the top of the `entries` array, paste in:

```js
{
  date: "2026-07-10",
  title: "Your entry title",
  body: `
    First paragraph.

    Second paragraph — just leave a blank line between paragraphs
    and the site handles the rest.
  `
},
```

Newest entries go at the **top** of the array. Save, commit, push — done.

## Publishing on GitHub Pages

1. Create a new repository on GitHub (public), e.g. `diary-of-a-crypto-guy`.
2. Put these four files (`index.html`, `style.css`, `entries.js`, `script.js`) in the root of that repository.
3. Commit and push them to the `main` branch.
4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`, then **Save**.
6. GitHub gives you a URL like `https://yourusername.github.io/diary-of-a-crypto-guy/` — it usually goes live within a minute or two.

From then on, publishing a new entry is just: edit `entries.js` → commit → push. GitHub Pages rebuilds automatically, no extra steps.

### Easiest day-to-day workflow

If you don't want to touch git commands each time, you can edit `entries.js` directly on GitHub.com:
1. Open the file in your repo on github.com.
2. Click the pencil (edit) icon.
3. Paste in your new entry at the top of the array.
4. Scroll down, click **Commit changes**.

That's it — no local setup needed at all.

## Customising

- **Colours** — all in `style.css` under `:root` at the top. Change `--paper`, `--accent`, etc.
- **Title / tagline** — in `index.html`, inside `<header class="masthead">`.
- **Font** — currently Caudex (headings/dates) + Literata (body text), loaded from Google Fonts in `index.html`.
