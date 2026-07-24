# Їжачок — сторінка проєкту

Сторінка-розповідь про прототип cozy-гри «Їжачок»: рік із життя маленького
їжачка, який готується до зими.

Vite + React + TypeScript, іконки `lucide-react`, ілюстрації — власні SVG
у стилі самої гри (пласкі low-poly форми, тепла лісова палітра).

## Локально

```bash
npm install
npm run dev
```

## Деплой

Автоматичний: будь-який push у `main` запускає GitHub Actions
(`.github/workflows/deploy.yml`), який збирає `dist/` і публікує на GitHub Pages.

⚠️ Один раз потрібно ввімкнути в репозиторії:
**Settings → Pages → Source: GitHub Actions**

`base: './'` у `vite.config.ts` — тому сайт працює за будь-якої назви репозиторію,
без правок конфігу.
