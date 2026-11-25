# bread.juringari.com

A standalone Cloudflare Worker (name `bread`) serving static assets, separate from the `juringari` Worker.

- `/` is the Rams panel (`public/index.html`).
- `/concepts/` is the gallery of every concept (`public/concepts/index.html`).

Deploy from this folder with an existing Wrangler login (`npx wrangler whoami` should show the right account):

```powershell
npx wrangler deploy
```

`wrangler.jsonc` binds `bread.juringari.com` as a custom domain, so Cloudflare creates the proxied DNS record itself. To change the root page, replace `public/index.html` and deploy again.
