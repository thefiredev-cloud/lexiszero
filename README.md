<div align="center">

# Lexis Zero

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/lexiszero/ci.yml?branch=main&style=flat-square&color=dc7c2a)](https://github.com/thefiredev/lexiszero/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/lexiszero?style=flat-square&color=dc7c2a)](https://codecov.io/gh/thefiredev/lexiszero)
[![Version](https://img.shields.io/npm/v/@thefiredev/lexiszero?style=flat-square&color=dc7c2a)](https://www.npmjs.com/package/@thefiredev/lexiszero)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1234567890?style=flat-square&logo=discord&color=5865F2)](https://discord.gg/thefiredev)
[![Case Types](https://img.shields.io/badge/case_types-small_claims_|_employment_|_landlord--tenant_|_consumer-dc7c2a?style=flat-square)](https://docs.thefiredev.com/lexiszero/coverage)

**The $0 lawyer.**

*Full litigation engine for small disputes. AI legal analysis, document generation, judge profiling, and e-filing — for people who can't afford BigLaw.*

[Landing Page](https://thefiredev.com/lexiszero) · [Docs](https://docs.thefiredev.com/lexiszero) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/lexiszero/issues)

</div>

---

## What It Does

Lexis Zero is a full litigation engine for small disputes. Describe your situation in plain English. Get a complete legal strategy, all required documents, insight on your judge's ruling patterns, and step-by-step filing instructions — or direct e-filing where available.

**Used by:** Anyone who's been wronged and can't afford an attorney. Small business owners, tenants, employees, consumers.

---

## Key Value Props

| | |
|---|---|
| ⚖️ **Full Case Analysis** | AI reads your situation, cites relevant law, assesses your odds |
| 📄 **Document Generation** | Demand letters, complaints, motions, responses — ready to file |
| 👨‍⚖️ **Judge Profiling** | How your specific judge rules on cases like yours |
| 📬 **E-Filing** | Direct electronic submission where court systems support it |
| 💰 **Accessible Pricing** | Free tier covers analysis and templates. $499 max for full representation support |

---

## Features

### Legal Analysis

- ⚖️ **Case Assessment** — AI analyzes facts, identifies applicable statutes, estimates win probability
- 📚 **Relevant Case Law** — Pulls recent decisions from your jurisdiction on similar disputes
- 🎯 **Strategy Recommendation** — Best path forward: demand letter, small claims, or formal complaint
- ⚠️ **Risk Flags** — Statute of limitations, jurisdictional issues, counterclaim exposure
- 💡 **Plain-English Explanations** — Legal concepts explained without the jargon

### Document Generation

- 📨 **Demand Letters** — Professional, legally grounded letters that get results
- 📋 **Small Claims Complaints** — Court-ready filings for all 50 states
- 📝 **Employment Complaints** — EEOC, NLRB, state labor board filings
- 🏠 **Landlord-Tenant Docs** — Unlawful detainer responses, habitability complaints, security deposit demands
- 🛡️ **Consumer Protection** — FTC, CFPB, state AG complaint templates
- ✍️ **Declaration Support** — Draft declarations and supporting evidence narratives

### Judge Profiling

- 👨‍⚖️ **Ruling Pattern Analysis** — Historical decisions in similar case types
- ⏱️ **Timeline Predictions** — How long cases typically take with this judge
- 💰 **Award History** — Typical damages awarded in comparable cases
- 📋 **Preferences** — Procedural preferences, common denials, what they respond to

### Filing & Tracking

- 📬 **E-Filing Integration** — Direct submission to supported court systems
- 📊 **Case Timeline** — Upcoming deadlines, required responses, hearing dates
- 🔔 **Deadline Alerts** — Never miss a response window
- 📁 **Document Vault** — All case documents in one place

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        Lexis Zero Platform                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Input: Dispute Description (plain English)                    │
│                          │                                       │
│              ┌───────────▼───────────┐                          │
│              │   Intake & Classifier  │                          │
│              │  (Case type + venue)   │                          │
│              └───────────┬───────────┘                          │
│                          │                                       │
│         ┌────────────────┼────────────────┐                     │
│         │                │                │                     │
│         ▼                ▼                ▼                     │
│  ┌────────────┐  ┌──────────────┐  ┌───────────────┐           │
│  │   Legal    │  │    Judge     │  │   Jurisdiction │           │
│  │  Research  │  │   Profiler   │  │    Engine      │           │
│  │   Engine   │  │              │  │                │           │
│  └─────┬──────┘  └──────┬───────┘  └───────┬────────┘           │
│        │                │                  │                    │
│        └────────────────┼──────────────────┘                    │
│                         │                                       │
│              ┌──────────▼───────────┐                           │
│              │    Strategy Engine   │                           │
│              │  (Win probability +  │                           │
│              │   path selection)    │                           │
│              └──────────┬───────────┘                           │
│                         │                                       │
│         ┌───────────────┼───────────────┐                       │
│         │               │               │                       │
│         ▼               ▼               ▼                       │
│   Document          Timeline         E-Filing                  │
│   Generator         Builder          Router                    │
│   (PDF/DOCX)       (Deadlines)     (Court APIs)                │
│                                                                  │
│              ┌───────────────────────┐                          │
│              │    Case Management    │                          │
│              │  Dashboard + Alerts   │                          │
│              └───────────────────────┘                          │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Supported Case Types

| Case Type | Venues | Documents Generated |
|-----------|--------|---------------------|
| Small Claims | All 50 states | Complaint, evidence packet, demand letter |
| Employment | EEOC, NLRB, state labor boards | Charge of discrimination, position statement |
| Landlord-Tenant | State + local courts | UD response, habitability complaint, deposit demand |
| Consumer Protection | FTC, CFPB, state AGs | Formal complaint, demand letter, BBB filing |

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql)](https://postgresql.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Pinecone](https://img.shields.io/badge/Pinecone-Vector_DB-000000?style=flat-square)](https://pinecone.io/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)

---

## Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL 15+
- OpenAI API key
- Pinecone API key (case law vector search)

### Installation

```bash
git clone https://github.com/thefiredev/lexiszero.git
cd lexiszero
npm install
cp .env.example .env
# Add OPENAI_API_KEY, PINECONE_API_KEY, DATABASE_URL to .env
npm run db:migrate
npm run db:seed  # Load case law index and judge profiles
npm run dev
```

### Analyze a Case

```bash
# Via CLI
npx lexiszero analyze \
  --type "small_claims" \
  --jurisdiction "Los Angeles, CA" \
  --description "Landlord refused to return $2,400 security deposit after 45-day vacancy"

# Via API
curl -X POST https://api.thefiredev.com/lexiszero/v1/cases \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "case_type": "small_claims",
    "jurisdiction": "Los Angeles County, CA",
    "description": "Landlord refused to return $2,400 security deposit after 45-day vacancy",
    "amount_in_dispute": 2400
  }'
```

---

## API Reference

### `POST /v1/cases`

Submit a new case for analysis.

**Request**
```json
{
  "case_type": "small_claims" | "employment" | "landlord_tenant" | "consumer",
  "jurisdiction": "string",             // "Los Angeles County, CA"
  "description": "string",             // Plain English description of the dispute
  "amount_in_dispute": 2400,
  "defendant": {
    "name": "string",
    "type": "individual" | "business",
    "address": "string"
  },
  "evidence": ["string"],              // URLs or base64 documents
  "generate_documents": true
}
```

**Response**
```json
{
  "case_id": "case_abc123",
  "case_type": "small_claims",
  "assessment": {
    "win_probability": 0.78,
    "recommended_path": "small_claims_filing",
    "key_statutes": ["CA Civil Code § 1950.5"],
    "statute_of_limitations_days": 1825,
    "estimated_award": { "min": 2400, "max": 7200 }
  },
  "judge_profile": { ... },
  "documents": [
    { "type": "demand_letter", "url": "...", "ready_to_send": true },
    { "type": "small_claims_complaint", "url": "...", "ready_to_file": true }
  ]
}
```

**Full API docs:** [docs.thefiredev.com/lexiszero/api](https://docs.thefiredev.com/lexiszero/api)

---

## Pricing

| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | Case analysis, strategy, statute research |
| Standard | $99/case | + All documents, judge profile, filing guide |
| Pro | $499/mo | + Unlimited cases, e-filing, deadline tracking, priority support |

[Start for free →](https://thefiredev.com/lexiszero)

---

## ⚠️ Legal Disclaimer

Lexis Zero is a legal technology tool, not a law firm. It does not provide legal advice and does not create an attorney-client relationship. For complex matters, consult a licensed attorney in your jurisdiction.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, code style, and PR guidelines.

## Security

Found a vulnerability? See [SECURITY.md](SECURITY.md) for responsible disclosure.

## License

MIT — see [LICENSE](LICENSE)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*The operating system for ambitious businesses.*

</div>
