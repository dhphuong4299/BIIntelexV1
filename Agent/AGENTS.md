# INTELEX Website + Virtual Labs

## Project Overview

INTELEX is a corporate R&D and innovation website for the THL ONE ecosystem.
The site must combine two roles:

- A clear company introduction for INTELEX, NoSE, THL ONE, technology capability, projects, community and collaboration.
- A browser-based Virtual Labs hub where users can explore selected learning and working tools directly on the web.

The website must not look or read like a generic software company page, SaaS landing page, portfolio template, or static brochure. It should feel like a practical technology and learning environment: trustworthy, modern, hands-on and transparent about what is real.

## Project Goals

- Explain who INTELEX is and its role inside the THL ONE ecosystem.
- Communicate the NoSE philosophy: Not Only Software Engineering.
- Present AI, Data/BI, IoT, Automation and R&D capabilities without exaggeration.
- Organize verified projects and technology initiatives in a clear public structure.
- Create an INTELEX Labs directory for browser-based interactive labs.
- Provide a reusable Lab Workspace shell for demos and future working labs.
- Support a future PWA/offline direction, but only label a lab offline-ready after real verification.
- Help students, teachers, office workers, self-learners and technical users interact with technology through guided experiments.

## Information Architecture

### Home

Route: `/`

Purpose:

- Introduce INTELEX briefly.
- Act as the main discovery gateway.
- Lead users to Labs, Projects, Community and About.
- Include a featured live lab or preview area only when the interaction really works.

Home should not repeat the full vision, mission, roadmap or long strategy content.

### Labs

Route: `/labs/`

Purpose:

- Directory for all Virtual Labs.
- Include search, category filters, status labels and offline indicators.
- Separate idea-stage labs from preview, runnable and offline-ready labs.
- Let users open a lab workspace page only when there is a meaningful workspace or preview.

### Lab Workspace

Route pattern: `/labs/[slug]/`

Purpose:

- Provide the actual interactive lab area.
- Prioritize usable workspace area over marketing content.
- Include toolbar, canvas/work area, inspector/result panel, export/import area and status indicators where relevant.
- On mobile, use tabs, drawers or bottom sheets instead of compressing a desktop three-column layout.

### Projects & Technology

Route: `/projects/`

Purpose:

- Combine the old Technology and Innovation content.
- Present four capability groups: AI & Machine Learning, Data & BI, IoT & Digital Twin, Automation.
- Present IN-01 to IN-06 as projects or initiatives only with accurate names and status.
- Avoid presenting roadmap items, internal branding work or unverified ideas as completed R&D projects.

### Community & Learning

Route: `/community/`

Purpose:

- Present learning resources, practice materials, mentor programs, internships, competitions and showcase/demo activities.
- Move IN-07, IN-08 and IN-10 here.
- Use only verified programs, resources and public claims.

### About

Route: `/about/`

Purpose:

- Explain INTELEX, NoSE, THL ONE relationship and collaboration direction.
- Include official contact content at `/about/#contact`.
- Avoid duplicating project and community content.

## Content Ownership

- Home owns the short brand gateway message.
- Labs owns lab catalog, lab statuses, offline readiness and interactive tools.
- Projects owns technology capabilities and IN-01 to IN-06.
- Community owns resources, competitions, internships, mentors and showcase activities.
- About owns organization identity, NoSE, THL ONE relationship and contact.

## Lab Categories

The Virtual Labs catalog is based on the 17 groups from `lab-idea.md`:

1. Digital Electronics
2. Electronic Circuit
3. Network
4. Web Development
5. Algorithm & Data Structure
6. Database
7. IoT & Microcontroller
8. Industrial Automation
9. Physics & Engineering
10. AI & Machine Learning
11. Operating System
12. Computer Architecture
13. Cybersecurity
14. DevOps & Cloud
15. 3D & CAD
16. Data Science
17. Signal Processing

Priority labels:

- P0: build first, broadly useful and feasible.
- P1: next wave.
- P2: needs engine, scope, license or performance research.
- P3: difficult or requires deeper technical/legal analysis.

## Lab Status Model

Use explicit status labels. Do not blur them.

- `Idea`: concept only.
- `In development`: being designed or implemented.
- `Preview`: visible prototype, not a complete working lab.
- `Runnable`: interaction works in the browser.
- `Offline ready`: all required JS, WASM, workers, fonts, models, datasets and assets are cached and verified offline.

Rules:

- Do not show "Open lab", "Run", "Download", "Export" or "Offline ready" if the feature does not actually work.
- If a lab is only a concept, show it as a concept with a clear description and no fake controls.
- Reference websites are benchmarks only. They are not proof that INTELEX can copy, iframe, redistribute or run the same engine offline.

## Design System

Follow `design-system.md` as the current design direction.

### Brand Rules

- Keep the official INTELEX logo file unchanged.
- Do not redraw the logo as text in the final site.
- Placeholder text logos are only allowed in mockups before official assets are supplied.
- Do not invent official brand tokens from the logo unless approved by the brand owner.

### Palette

Use the proposed tokens:

- `--ink`: main text, dark workspace surfaces.
- `--gold`: primary CTA and brand accent.
- `--gold-pale`: labels and subtle technology cards.
- `--ivory`: marketing page background.
- `--surface`: cards, forms and chart surfaces.
- `--border`: dividers and grouping.
- `--muted`: secondary text.
- `--tech-blue`: diagrams and data lines.
- `--signal-teal`: success/output states.
- `--violet`: AI or academic secondary accents.

Gold is an accent, not a low-contrast small-text color on white.
Status must use text or icons in addition to color.

### Typography & Layout

- Use Inter or Noto Sans, preferably self-hosted for offline direction.
- Use system-ui fallback.
- Support Vietnamese diacritics well.
- Marketing pages should use generous whitespace and a calm layout.
- Lab Workspace pages should optimize for density, scanning and repeated interaction.
- Avoid excessive gradients, heavy animation, cyberpunk styling and generic AI artwork.

## Core Components

Expected reusable components:

- `GlobalHeader`
- `GlobalFooter`
- `Hero`
- `FeaturedLiveLab`
- `LabSearch`
- `CategoryFilter`
- `LabCard`
- `LabStatus`
- `ProjectCard`
- `ProjectEvidence`
- `ProgramCard`
- `ContactPanel`
- `LabWorkspaceShell`
- `Toolbar`
- `InspectorPanel`
- `ResultExport`
- `OfflineReadyIndicator`
- `EmptyState`
- `ErrorState`

## Tech Stack

Default stack:

- HTML5
- CSS3
- Vanilla JavaScript

Do not add a frontend framework, backend, database, bundler, package manager or build step unless the user explicitly approves it.

The project can be structured so that future PWA features, Service Worker, IndexedDB, OPFS, Web Workers, Web Audio, WebGL or WASM can be added later.

## Folder Structure

Recommended structure for the first static version:

```text
src/
├── index.html
├── labs/
│   ├── index.html
│   └── circuit-lab.html
├── projects/
│   └── index.html
├── community/
│   └── index.html
├── about/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── workspace.css
│   ├── js/
│   │   ├── main.js
│   │   ├── labs-data.js
│   │   ├── lab-directory.js
│   │   └── workspace-circuit-demo.js
│   ├── images/
│   ├── icons/
│   └── fonts/
└── content/
    ├── website-content.md
    ├── labs-catalog.md
    └── projects-catalog.md
```

Project instruction files:

```text
AGENTS.md
AGENTS_INTELEX.md
lab-idea.md
design-system.md
content-migration.md
```

- `AGENTS.md`: current rules for INTELEX Website + Virtual Labs.
- `AGENTS_INTELEX.md`: older corporate website reference.
- `lab-idea.md`: Virtual Labs catalog and implementation direction.
- `design-system.md`: visual and UX rules.
- `content-migration.md`: page ownership and route migration rules.

## Content Migration Rules

- `/` remains Home.
- `/about.html` becomes `/about/`.
- `/technology.html` and `/innovation.html` become `/projects/`.
- `/ecosystem.html` becomes `/community/`.
- `/contact.html` becomes `/about/#contact`.
- New lab content uses `/labs/` and `/labs/[slug]/`.

Before final redirect implementation, check analytics, backlinks and current URL usage.

## Project Codes

Use these public mappings unless newer approved content says otherwise:

- IN-01: HR Digital Worker Platform.
- IN-02: HR Analytics Dashboard.
- IN-03: IoT Framework.
- IN-04: Agricultural Digital Twin (Hydroponic).
- IN-05: Core SaaS Framework.
- IN-06: Multi-Tenant SaaS Pilot (MES).
- IN-07: Academic Competition. Belongs to Community.
- IN-08: Internship Program. Belongs to Community.
- IN-09: Website/branding. Internal plan, not a featured public R&D project.
- IN-10: Innovation Showcase/Demo Day. Belongs to Community.

These names describe initiatives from current source material. They do not prove that products are completed, deployed or commercially available.

## UI Rules

- Use semantic HTML.
- Keep header and footer consistent across pages.
- Use real links and working internal navigation.
- Keep CTAs honest and specific.
- Use clear lab cards with title, category, audience, priority and status.
- Use search/filter controls for the Labs directory.
- Use visible focus states for buttons, links and form controls.
- Avoid nested cards and overly decorative sections.
- Avoid large blocks of in-app explanatory text about how the UI works.
- Make the first screen useful, not a generic marketing hero only.
- For Lab Workspace, use fixed/responsive dimensions for toolbars, panels, canvases and grids to prevent layout shifts.
- On mobile, do not allow horizontal overflow.

## Offline & PWA Rules

- Offline support means a real verified browser experience, not just a claim.
- Use versioned Cache Storage and Service Worker only when implemented and tested.
- Cache all required local JS, WASM, workers, fonts, sample data, models and assets.
- Do not depend on CDN, remote font servers or hidden APIs at runtime for offline labs.
- Store user-created lab projects in IndexedDB or OPFS only after implementation is planned and tested.
- Provide export/import when user work may otherwise be lost through browser storage cleanup.
- Labs requiring microphone, file access, WebGL or other permissions must explain the permission at the point of use.

## Accessibility & Responsive Requirements

Support these viewport families:

- Desktop: 1920, 1440, 1366.
- Tablet: 1024, 768.
- Mobile: 430, 390, 375.

Requirements:

- No horizontal overflow.
- No overlapping text, controls or cards.
- Mobile menu works.
- Heading hierarchy is logical.
- Images have useful alt text.
- Interactive controls are keyboard reachable.
- Focus state is visible.
- Main text meets WCAG AA contrast.
- Motion respects `prefers-reduced-motion`.
- Status is not communicated by color alone.

## Content Rules

- Keep the R&D & Innovation Hub positioning.
- Keep the NoSE philosophy accurate.
- Do not invent customers, partners, revenue, KPIs, testimonials, awards, case studies or completed deployments.
- Do not turn roadmap items into achieved milestones.
- Mark missing or unverified content as needing confirmation.
- AI is important, but it is not the whole INTELEX identity.
- Public claims about staffing, revenue, customers, internships, AI/IoT results, photos, products and releases require verification and approval.

## QA Checklist

Before considering a page or lab ready:

- Desktop, tablet and mobile layouts checked.
- No horizontal overflow.
- No incoherent overlap between text, cards, controls or media.
- Header, footer, menu and internal links work.
- Logo, images, icons and fonts load correctly.
- Console has no avoidable errors.
- CTA buttons show only real available actions.
- Labs search and filters work.
- Lab status labels match real implementation status.
- Workspace toolbar, panels and result areas remain usable at target viewports.
- Export/import/download controls work before they are shown.
- Offline-ready label is shown only after offline smoke testing.
- Keyboard focus states are visible.
- Reduced-motion preference is respected.
- Vietnamese text renders correctly.
- INTELEX spelling and terminology are consistent.
- No unverified claims, fake metrics or unsupported project statuses are present.

## Don't Touch

- Do not replace, redraw or reinterpret the official INTELEX logo.
- Do not change approved brand colors, page ownership or sitemap direction without approval.
- Do not turn the site into a SaaS landing page.
- Do not add Pricing, Checkout, Payment, Login, Register or account flows.
- Do not add backend, database, analytics, tracking or external form services without approval.
- Do not add React, Vue, Angular, Tailwind, Bootstrap, Vite, npm or pnpm unless explicitly requested.
- Do not hotlink CDN assets when building for offline direction.
- Do not copy, iframe, redistribute or bundle external lab websites without checking license and terms.
- Do not claim a lab is runnable or offline-ready unless it is implemented and tested.
- Do not invent customers, partners, achievements, public metrics, testimonials or case studies.
- Do not publish, deploy, commit or delete assets unless the user asks.
- Do not remove existing files or assets without explicit instruction.

## Source of Truth

Current working references:

1. `lab-idea.md`
2. `design-system.md`
3. `content-migration.md`
4. `AGENTS_INTELEX.md`

When sources conflict:

- Do not silently choose one.
- Mark the conflict as needing confirmation.
- Keep public content conservative until approved.
