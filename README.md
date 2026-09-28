# valeriadebois.com

Website of Valeria De Bois, biologa nutrizionista. Built with [Hugo](https://gohugo.io/).

## Preview

```bash
hugo server
```

Open http://localhost:1313/.

## Where the text lives

| Page | File |
|---|---|
| Home | `content/_index.it.md` |
| Chi sono | `content/chi-sono.it.md` |
| Servizi (also the cards on Home) | `content/servizi.it.md` |
| Contatti | `content/contatti.it.md` |
| Blog sections | `content/blog/_index.it.md` |
| One article | `content/blog/<name>/index.it.md` |
| Nav and footer labels | `hugo.toml` (menus) |
| Short labels (buttons, "min di lettura") | `i18n/it.yaml` |

## Add an article

1. Copy a folder in `content/blog/`, for example `content/blog/food-noise/`, and rename it. The folder name is the URL.
2. In `index.it.md`, change `title`, `summary`, `mins`, `blog_section` (1, 2 or 3) and `weight` (order inside the section).
3. Replace `card.png` (or `card.jpg`) with the card image. `card_bg` is the color around it.
4. To show it on Home, give it `home: 1`, `2` or `3`, and remove that number from the article that had it.

## Publish

A push to `main` builds the site and publishes it with GitHub Actions (`.github/workflows/hugo.yaml`).
In GitHub, Settings → Pages → Source must be "GitHub Actions".

## English

English is set up in `hugo.toml` but turned off (`disableLanguages`). To add a page in English, create
the same file with `.en.md` (for example `content/chi-sono.en.md` with `translationKey` or a matching name),
add `i18n/en.yaml` and the English menus, then remove `en` from `disableLanguages`.
