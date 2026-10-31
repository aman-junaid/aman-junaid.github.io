# aman-junaid.github.io
Aman junaid profile

# MET website

Self-contained Jekyll website for a **separate GitHub repository**, such as `met-website`. No Android source or configuration is needed. The `website/` directory is a staging location in the app workspace: copy its contents, including hidden files, into the root of the new repository. Do not publish the Android repository to host this site.

## GitHub Pages

1. Create the website repository on GitHub. GitHub Free requires a public repository for Pages.
2. Copy this folder's contents into its root and push to the default branch.
3. In **Settings → Pages**, select **Deploy from a branch**, the default branch, and **/ (root)**. GitHub builds Jekyll automatically; no custom Actions workflow is needed.
4. Set `_config.yml` for the resulting URL. For `https://aman-junaid.github.io/met-website/`, use `url: "https://aman-junaid.github.io"` and `baseurl: "/met-website"`.
5. Open the published site and check the homepage, all six guides, asset loading, Google Play, contact, and privacy links.

Official setup: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Optional custom domain

Recommended: `met.amanjunaid.com`. This lets the existing Google Sites website continue hosting the main domain.

Verify domain ownership in GitHub, set the custom domain in repository Pages settings, then add the required DNS record with your provider. For this account, a subdomain CNAME would target `aman-junaid.github.io`. Use `url: "https://met.amanjunaid.com"` and `baseurl: ""`, and enable HTTPS when available.

The existing `/apps/met-my-expense-tracker` page can link visitors to the new site. A DNS record cannot redirect a single URL path; keeping that exact path on another host would require moving the main website or configuring an HTTP proxy. Do not change the main domain's DNS just to move MET.

Official domain setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Edit content

The homepage is `index.html`. Guides are Markdown files in `_guides/`; their URLs follow their filenames. To add a tutorial, create a Markdown file with front matter:

```yaml
---
title: A useful tutorial title
description: What the reader will learn.
category: Everyday tips
reading_time: 3
order: 7
---
```

Write the tutorial below the front matter. Navigation and the guide library update automatically. Use `{{ '/guides/getting-started/' | relative_url }}` for internal links so they work on repository paths and custom domains. Guide ordering controls the first three featured homepage guides.

Global layout and navigation: `_layouts/default.html`. Article layout: `_layouts/guide.html`. Styles: `assets/style.css`. The small `assets/theme.js` script controls the light/dark switch and matching MET screenshots. It follows the device theme until a visitor chooses a theme, then saves that preference in browser local storage. There is no analytics or external font dependency. Paired screenshots are in `assets/images/met/light/` and `assets/images/met/dark/`; `_includes/met-screenshot.html` provides responsive WebP sources.

## Local preview

With a supported Ruby environment and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

Open the printed localhost URL. To check a GitHub project path:

```sh
bundle exec jekyll build --baseurl /met-website
```

Verify at 390px and desktop widths: navigation, links, FAQ expansion, readable guide content, no horizontal overflow, and keyboard focus. Respect reduced-motion settings.

## Content notes before launch

- Review guides against the release actually available on Google Play. Current copy was grounded in `APP_SPECIFICATION.md` and app source in the Android workspace; it does not claim every feature is available in every release.
- The hero is an explicitly labeled illustration. The scheduled image is an existing sample UI preview, not a promise of the current store release. Replace it with approved release screenshots when ready.
- The support address and external app privacy-policy URL come from the Google Play listing. The privacy-policy URL could not be retrieved during preparation; verify it before launch. This site links to the existing policy rather than inventing a replacement policy.
- No repository has been created or pushed, no domain has been changed, and no deployment has been performed by creating these files.
