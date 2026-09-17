# Proworks (ப்ரோவர்க்ஸ்)
> **The Sovereign Platform for Dignity, Confidence & Trade Mastery in India**
> Non-white-collar professional identity & direct-work rail for skilled technicians, artisans, mechanics, electricians, fabricators, and supervisors.

---

## 🏛️ Executive Summary & Doctrine
In contemporary India, millions of master artisans, automotive mechanics, HVAC technicians, precision welders, heavy equipment operators, and construction supervisors power the physical economy. Yet the digital public sphere reduces them to anonymous manual labor, subjecting them to exploitative middleman contractors, wage theft, and total lack of portable professional reputation.

**Proworks** is built to give skilled trade professionals the same dignity, verified credibility, and network strength that LinkedIn provides to white-collar desk workers—engineered specifically for the real-world operational rhythms of India under **Aram (அறம்)**.

- **Zero Middleman Arbitrage**: Direct client/contractor-to-worker contact via phone and WhatsApp with zero commission extraction.
- **Verifiable Trade Credentials & Work Badges**: Badges for government certifications (ITI, NSDC, NCVT), safety certifications, equipment endorsements, and peer/contractor attestations.
- **Portable Work Portfolio**: Before-and-after photographic job proof, project logs, and direct client ratings.
- **Edge-First & Offline-Tolerant**: Ultra-lightweight Cloudflare Pages substrate loading instantaneously even on 2G/3G mobile connections in Tier-2/3 industrial clusters.

---

## 🛠️ System Architecture & Stack
- **Web Surface**: Cloudflare Pages edge static substrate (`public/` and `dist/`) with zero-latency edge delivery.
- **Client Application**: Vanilla TypeScript / Edge HTML5 with Tailwind-inspired sovereign styling (Uber Black `#0a0a0c`, Brass Gold `#d97706`, Emerald Verified `#10b981`).
- **Identity Rail Integration**: Pre-wired for **ProID.id** sovereign OAuth credentials and verification badges.
- **Plane Management**: Sourced under `aram-imperial` sovereign workspace (`PROW` identifier, Project ID: `67beb6df-71b1-4651-9542-142b0c005ae7`).
- **Cloudflare Target**: `proworks` project on Cloudflare Pages (`proworks.pages.dev`).
- **GitHub Repository**: `nodesman/proworks` (`git@github.com:nodesman/proworks.git`).

---

## 📦 Project Structure
```
tech/proworks/
├── .gitignore               # Sovereign ignore patterns (node_modules, dist, secrets)
├── Makefile                 # Deterministic local build and test targets
├── README.md                # Sovereign project manifesto and doctrine
├── wrangler.jsonc           # Cloudflare Pages edge configuration
├── package.json             # Lightweight scripts and verification test harness
├── public/                  # Static assets (favicons, trade badge SVG vectors)
├── src/
│   ├── data/
│   │   └── trades.json      # Structured sample dataset of trade categories & verified profiles
│   └── index.html           # Edge responsive interactive UI with search, filter, badge inspection
└── _meta/
    ├── EPICS.md             # Sovereign Plane Epics mapping and breakdown
    └── MANIFEST.md          # Sovereign architectural metadata & ownership
```

---

## 🚀 Quickstart & Commands
```bash
# Verify build & smoke test
make test

# Local development preview
make dev

# Deploy to Cloudflare Pages
make deploy
```
