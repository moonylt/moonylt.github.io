# moonylt — personal portfolio

An Astro site for embedded systems, hardware projects, and engineering notes.

## Local development

Use Node.js 22.12 or later, then run:

```sh
npm ci --legacy-peer-deps
npm run dev
```

The existing Tailwind integration requires the same legacy peer-dependency flag used by the deployment workflow.

## Validate and preview

```sh
npm run astro -- check
npm run build
npm run preview
```

The build generates eight static pages plus responsive WebP images. GitHub Pages publishes pushes to `master` or `main` through the existing deployment workflow.

## Update content

- Projects: `src/data/projects.ts`
- Hardware photos: `public/images/projects/`
- Image optimization mapping: `src/components/ProjectImage.astro`
- Journal entries: `src/content/blog/`
- Shared styles: `src/styles/global.css`
- About and contact details: `src/pages/about.astro` and `src/components/Footer.astro`

When adding a project photo, register its static import in `ProjectImage.astro` to generate responsive images. Original photos remain available from each project gallery.

## Interaction checks

- Open search from the navigation, Ctrl/Cmd+K, or /.
- Search by page title, project name, or technology; arrow keys select and Enter opens.
- Escape closes search and restores focus. No-result searches remain safe to navigate.
- Check the mobile menu at 320px, 390px, and tablet widths; Escape and outside clicks close it.
- Verify long project diagrams scroll inside their own region without widening the page.
- Main content, navigation, project links, and email links work without JavaScript.
- Reduced-motion preferences disable smooth scrolling and transitions.

The original Konami-code CRT overlay remains as an opt-in easter egg. No recurring status timers, remote statistics requests, external fonts, or animation delays are required to view the content.
