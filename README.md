# VM SERVICES BENIN

Site vitrine — Distributeur Agréé Officiel SOBEBRA.

## Stack
- React 18 + Vite + TypeScript
- Tailwind CSS 3
- SPA — déploiement Vercel direct

## Démarrer
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
```
Génère le dossier `dist/`.

## Déploiement Vercel
1. Importer le repo / dossier dans Vercel.
2. Framework preset : **Vite**.
3. Build command : `npm run build`
4. Output directory : `dist`
5. Deploy.

Le fichier `vercel.json` gère le fallback SPA.
