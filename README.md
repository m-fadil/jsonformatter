# JSON Formatter

Editor JSON di browser: format, validasi, repair, tree/text/table view, search, sort, transform.
Semua jalan di sisi klien — tidak ada data yang dikirim ke server.

Isi editor otomatis tersimpan di `localStorage` (`jsonformatter:content`) dan dipulihkan saat halaman dibuka lagi.

## Stack

React 19 · TypeScript 5.9 · Vite 8 · [vanilla-jsoneditor](https://github.com/josdejong/svelte-jsoneditor) 3 · ESLint 10

## Perintah

```bash
npm install
npm run dev      # dev server
npm run build    # tsc -b && vite build -> dist/
npm run preview  # preview hasil build
npm run lint
npm run deploy   # build + publish dist/ ke GitHub Pages
```

## Catatan versi

TypeScript ditahan di 5.9 karena `typescript-eslint@8` masih membatasi peer `typescript <6.1`,
dan paket `typescript@7` tidak lagi mengekspor JS compiler API yang dipakai parser-nya.
Naikkan ke 7 setelah typescript-eslint merilis dukungannya.
