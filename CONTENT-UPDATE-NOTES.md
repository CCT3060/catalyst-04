# Content Update — Website Content Draft 3

Applied the finalized copy from *Website Content Draft 3.docx* to the site. Matched the document's
structure exactly, reusing the existing design system (eyebrow labels, `data-reveal` animations,
`.lift` cards, alternating section backgrounds, shared `CTA` component).

**Food Services** was left untouched — it already matched Draft 3.

## Pages updated

### src/pages/Facilities.jsx → Integrated Facility Management
- New Overview: "Creating Spaces That Perform. Environments That Thrive."
- Service blocks: **Engineering Services**, **Soft Services**, **Production Support Services** (each with a capability checklist)
- New "Industries We Serve" (Manufacturing, Automobile, Healthcare, BFSI, IT & ITES, Educational, Commercial Offices, Logistics Parks)
- Kept Smart Facility Operations + Innovation; added **Why Catalyst IFM** and "Your Space. Our Expertise." closing
- Removed old service-card grid, Commercial Property Management section, and unused `commercialImg` import

### src/pages/Workforce.jsx → Workforce Solutions (full rewrite)
- New hero: "The Right People. The Right Support. The Right Impact."
- About Staffing + 5 solution blocks: Manpower Staffing & Deployment, Field Force Management, Payroll Management, Compliance Management, Workforce MIS & Reporting
- Technology ecosystem cards (HRMS / Client Dashboard / Mobile Applications / Admin & Control Panel)
- Industry cards (FMCG, Beverages, FMCD, Telecom, Logistics, Retail, Allied Sectors)
- 7 "Why Catalyst" cards + "The Catalyst Difference" with the "You bring the vision / We bring the workforce" pull-quote

### src/pages/HealthcareTech.jsx → Healthcare Technology Management
- New hero: "One Hospital. One Ecosystem. Uninterrupted Care."
- ISO intro, 7 Capabilities, Service Model + "delivers" list
- **Outcomes We Deliver** metric tiles (95–98% uptime, SLA response, 100% preventive maintenance, 100% calibration, trained users, monthly leadership visibility)
- Updated "Beyond Equipment Maintenance" cards (new wording: "patient, staff and visitor's dining… staffing solutions")
- Revised "The Catalyst Advantage" cards; kept Supporting Better Care closing + CTA

## Verification
- Dev server started; `#ifm`, `#workforce`, `#htm` all confirmed via accessibility tree.
- No console or server errors on any page.

## Outstanding follow-ups (require assets/input from Catalyst)
1. **Remove "ASHA" client name** from the Healthcare dashboard screenshot
   (`src/assets/Screenshot 2026-07-13 161017.png`). A `TODO` comment marks its usage in
   `src/pages/HealthcareTech.jsx`. Needs an edited image.
2. **Industry logos** for the Workforce "Industries We Serve" section (doc note: "shown via logo").
   Currently rendered as descriptive cards — swap to logos once assets are provided.
