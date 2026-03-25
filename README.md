# AJ Menon — Portfolio v2

Personal portfolio for AJ Menon, Full-Stack SWE based in Brisbane, AU. Features a dark cyber-glassmorphism aesthetic with 3D elements, scroll animations, and light/dark mode.

## Stack

| Category      | Technology                   |
| ------------- | ---------------------------- |
| Framework     | Next.js 16 (App Router)      |
| Language      | TypeScript                   |
| Styling       | Tailwind CSS v4, shadcn/ui   |
| Animation     | Framer Motion, GSAP          |
| 3D            | Three.js, React Three Fiber  |
| Forms & Email | React Hook Form, Zod, Resend |
| Deployment    | Vercel                       |

## Getting Started

```bash
npm install
npm run dev
```

Add a `RESEND_API_KEY` env var for the contact form to work.

## CI / Automation

Mention `@claude` in any issue or PR comment to trigger the Claude Code agent. All non-draft PRs are automatically reviewed via Claude Code Review. Both require a `CLAUDE_CODE_OAUTH_TOKEN` secret in repo settings.
