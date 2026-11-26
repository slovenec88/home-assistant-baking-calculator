# bake.juringari.com

A standalone Cloudflare Worker (name `bake`) serving static assets, separate from the `juringari` Worker.

- `/` is Bake (`public/index.html`, with the typeface in `public/fonts/`).
- `/concepts/` is the gallery of every concept that was tried (`public/concepts/index.html`).
- `bread.juringari.com` redirects here with a small second Worker (`bread`) that has a single `_redirects` rule. It is not part of this folder.

Deploy from this folder with an existing Wrangler login (`npx wrangler whoami` should show the right account):

```powershell
npx wrangler deploy
```

`wrangler.jsonc` binds `bake.juringari.com` as a custom domain, so Cloudflare creates the proxied DNS record itself. To change the page, replace `public/index.html` and deploy again.
