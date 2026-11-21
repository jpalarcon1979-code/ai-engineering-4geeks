# TrackFlow Business Context

## Purpose and source of truth

This document summarizes TrackFlow's business domain for project contributors and AI coding agents. The primary source is [`BRIEFING.md`](./BRIEFING.md). Use the briefing when exact wording or additional detail is needed. This context is a synthesis, not a record that the systems proposed below have been built.

Do not silently resolve source conflicts or fill gaps with assumptions. In particular, the briefing gives two different surnames for the CEO; both are recorded below pending confirmation.

## Company identity

TrackFlow is a last-mile delivery and warehouse-management company serving e-commerce brands. It stores clients' inventory, prepares and packs orders, coordinates carrier delivery, and handles returns.

The briefing says Thomas established an internal unit called **TrackFlow Tech** to build the systems, integrations, and intelligent automation needed to modernize the business. Because the source conflicts on Thomas's surname, refer to him as Thomas without choosing a surname unless the discrepancy is resolved.

| Fact | Briefing information |
|---|---|
| Founded | 2009, in Los Angeles, United States |
| Markets | United States and Spain |
| Warehouses | Los Angeles and Zaragoza |
| Company size | Approximately 130 employees |
| Annual revenue | Approximately EUR 9 million |
| Operating model | Business-to-business services for e-commerce brands; its operations also affect end consumers receiving packages |

These are approximate business-profile figures, not live operational measurements.

## Organization and responsibilities

| Area | Lead and team, as stated in the briefing | Responsibility |
|---|---|---|
| Executive leadership | **CEO name is inconsistent in the source:** Thomas Harry, described as founder and CEO based in Los Angeles, in the organizational overview; Thomas Espinoza is identified as CEO in the Executive Management section. The source does not associate the second name with a location. | Leads the company and receives a consolidated weekly report. Do not select one surname without confirmation. |
| Warehouse Operations | Ana Whitfield; approximately 70 warehouse operators and two warehouse managers | Oversees the Los Angeles and Zaragoza warehouses. |
| Last Mile and Carrier Management | Carlos Vega; six logistics coordinators | Assigns carriers, follows deliveries, and handles shipment incidents. |
| Reverse Logistics | Sofía Ramos; a five-person team | Reviews and processes returned products. |
| Customer Experience | Valentina Cruz; 15 agents in Los Angeles and Zaragoza | Supports both brand clients and end consumers through customer-service channels. |
| Sales and Client Relationships | Miguel Torres; four account managers and four business-development staff | Retains existing brand clients and develops new business. |
| People | Rafael Sanz; a three-person team in Zaragoza | Hiring, onboarding, internal policies, employee questions, and people operations across both countries. |
| Technology | Andrés Kim, CTO; a seven-person team in Zaragoza | Developers, data engineers, and systems technicians who build and maintain company technology. |

The briefing does not specify the reporting lines of every role beyond these descriptions.

## Current operations, problems, and stated needs

The needs below are proposals in the company briefing. They describe opportunities, not verified or implemented capabilities.

### Warehouse Operations

**Current state and problems**

- Los Angeles and Zaragoza use separate warehouse-management approaches: one commercial software system and one advanced spreadsheet.
- There is no real-time global inventory view. Incoming orders arrive by email in varying formats and are re-entered manually; picking uses printed lists.
- Inventory discrepancies are common and found late.

**Stated future needs**

- A unified inventory API that reports SKU stock at either warehouse.
- Automated interpretation and ingestion of order emails.
- A warehouse-operations dashboard and low-stock alerts for clients and the purchasing team.

### Last Mile and Carrier Management

**Current state and problems**

- Carrier assignment is manual; staff check carrier portals individually to track packages.
- Structured historical performance data is unavailable, including on-time delivery, route incidents, and cost per kilogram.

**Carrier information in the briefing**

- The company works with eight carriers across both countries.
- The country breakdown names UPS, FedEx, and DHL in the United States; MRW, SEUR, DHL, and two local carriers in Spain.
- Carrier selection and API details are not specified.

**Stated future needs**

- A carrier recommendation engine using destination, weight, and urgency.
- A unified tracking endpoint, a public tracking portal for recipients, and a carrier-performance dashboard.

### Reverse Logistics

**Current state and problems**

- Returns account for approximately 18%–25% of volume, depending on client and country.
- Return decisions are reviewed manually; product inspection is subjective, and the company lacks visibility into return patterns and reasons.

**Stated future needs**

- Client-configurable automated approval rules and an automated collection flow (approval, label, carrier scheduling).
- AI-assisted product-condition classification from operator-taken photos.
- A returns dashboard for pattern analysis.

### Customer Experience

**Current state and problems**

- The team serves both B2B brand clients and B2C end consumers through email, WhatsApp, and phone, without a unified ticketing system.
- The briefing estimates that 80% of inquiries could be answered automatically. There is no knowledge base, and there is no after-hours coverage.

**Stated future needs**

- A frontline agent for shipment-tracking and return-status inquiries.
- A semantically indexed knowledge base for retrieval-augmented generation (RAG), unified ticketing, and a real-time customer-experience dashboard.
- Sentiment analysis to identify frustrated clients before escalation.
- Spanish-English support is optional but strongly recommended, starting with one base language.

### Sales and Client Relationships

**Current state and problems**

- Account managers track clients in personal spreadsheets and email threads; there is no CRM.
- Monthly client PDF reports are assembled manually from multiple systems. Renewal risk is not visible, despite annual contracts.

**Stated future needs**

- CRM integration and unified client profiles.
- Automatically generated client reports, a client-health dashboard with renewal-risk scores, and alerts 90 and 30 days before renewal.
- A sales agent that suggests relevant services to prospects.

### People

**Current state and problems**

- Hiring and onboarding rely on email and different welcome PDFs by country. Onboarding is inconsistent and does not check understanding of warehouse, carrier, and returns operations.
- System access requests are delayed because they depend on manual follow-up. Employee questions about leave, policies, and benefits arrive by email and chat and receive inconsistent answers.
- People metrics are not available by country; the team works across two different employment frameworks.

**Stated future needs**

- Structured onboarding for corporate staff covering the company, operations, role, and internal guidelines, with comprehension checks and progress tracking.
- Automated system-access requests; an internal HR portal for leave and policy information; and a people-metrics dashboard by country.
- An internal HR agent grounded in official policy documents.
- Spanish-English support is optional but strongly recommended, starting with one base language.

### Technology

**Current state and problems**

- The environment includes two different warehouse-management approaches, a legacy ERP from the early 2010s, undocumented point-to-point Python scripts, and databases at two cloud providers.
- There is no centralized telemetry. Operations failures may reach the Zaragoza technology team through WhatsApp.
- A new feature deployment takes approximately one to two weeks.

**Stated future needs**

- Centralized telemetry and logging across both countries; a data pipeline for company dashboards; real-time monitoring and alerts.
- A technical-documentation agent and automated operational tasks such as backups, health checks, and incident notifications.

### Executive Management

**Current state and problems**

- Directors prepare a consolidated report manually on Sunday night, spending three to four hours each. By 10 a.m. Monday, some data is already one or two days old.
- There is no unified view by country; strategic decisions use partial data.
- The CEO's surname is unresolved in the source (see the organization table).

**Stated future needs**

- A global, real-time KPI dashboard covering shipment volume, on-time delivery, costs, returns, and customer satisfaction (CSAT).
- An automatically generated weekly report at 7 a.m. Monday; country comparisons; threshold alerts; and a natural-language AI assistant.

## Existing systems and known dependencies

The briefing identifies the following as current: two warehouse-management approaches (commercial software and an advanced spreadsheet), a legacy ERP, undocumented Python integrations, databases across two cloud providers, carrier portals, and communication through email, WhatsApp, and phone.

The briefing does **not** name the vendors, products, versions, APIs, cloud providers, CRM, or data schemas. It says no CRM and no unified ticketing or knowledge base currently exist. Do not invent these details. Proposed integrations (for example CRM, carrier APIs, or a unified inventory service) depend on systems and access that are not identified in the source.

## Constraints, assumptions, and data discipline

- The business operates in the United States and Spain, with distinct regulatory environments and labor frameworks. Specific legal obligations are not supplied here; do not infer or present legal advice.
- Spanish and English are relevant to the two-country operation. The briefing marks multilingual support as optional but strongly recommended for Customer Experience and People, beginning with one base language.
- Preserve qualifiers such as “approximately” for company size, revenue, workforce, and return volume.
- Do not invent carrier names beyond those listed, software vendors, API behavior, KPI definitions, service levels, customer data, or legal requirements.
- Keep the CEO-name discrepancy explicit until an authoritative correction is provided. Do not use either surname as confirmed.
- Treat operational issues as information reported by the briefing, not as independently measured current telemetry.

## Implemented functionality versus future needs

The systems and workflows described as current above are the briefing's account of TrackFlow's existing business environment. Items labeled **Stated future needs** are aspirations and must not be described as already deployed.

This company context does not establish the implementation status of applications in this repository. Verify repository code and application documentation before claiming that any proposed API, dashboard, agent, integration, or automation exists. The business need for a public shipment-tracking portal, for example, does not by itself mean that such a portal has been implemented.
