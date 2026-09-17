# Proworks Epics & Sovereign Work Taxonomy

All work for Proworks is tracked under the `aram-imperial` workspace in Plane (`PROW`).
Project ID: `67beb6df-71b1-4651-9542-142b0c005ae7`

---

## Epic 1: Sovereign Identity & Skilled Trade Profiles
- **Plane Module ID**: `30151ab9-bea8-4c3f-a085-41c71e2bae69`
- **Objective**: Provide skilled trade workers (Mechanics, Electricians, Carpenters, Welders, Technicians, Supervisors) with tamper-resistant digital profiles and verifiable credentials.
- **Key Vectors**:
  - ITI, NCVT, and trade certificate verification.
  - Photo portfolio of completed jobs with before/after documentation.
  - Multi-lingual display (Tamil, Hindi, Telugu, Kannada, English) ensuring zero literacy barriers.
  - Integration with **ProID.id** for one-tap credential verification.

## Epic 2: Direct Hiring & Verification Rail
- **Plane Module ID**: `97431bfc-3cfe-4223-8adc-4453597e3a90`
- **Objective**: Eradicate exploitative sub-contractors and middlemen who siphon 30-50% of worker wages.
- **Key Vectors**:
  - 1-click Direct WhatsApp & Direct Call rails.
  - Contractor and client reviews with verified project badges.
  - Localized radius search (by industrial zone, pin code, or town).
  - Fair daily wage baseline transparency to prevent undercutting and exploitation.

## Epic 3: Edge Deployment & Turnkey Handoff
- **Plane Module ID**: `ef5a8228-eaa7-4b3d-b1da-02f5d2560400`
- **Objective**: Lightweight edge infrastructure deployable globally on Cloudflare with zero recurring server maintenance overhead.
- **Key Vectors**:
  - Sub-100ms load times on low-end Android hardware.
  - Automated deployment via Cloudflare Pages.
  - Zero-dependency static edge runtime with regression test suite.

## Epic 4: AeroCall Click-to-Call Integration
- **Plane Module ID**: `ff6fa917-98c5-455c-ad64-911151afdbe4`
- **Objective**: Direct WebRTC browser-to-browser audio calling bypassing carrier PSTN tolls, enabling instant zero-cost voice connection between client/contractor and the Pro without leaking personal phone numbers.
- **Key Vectors**:
  - AeroCall WebRTC SDK integration into worker cards.
  - Privacy preservation (masking direct phone numbers for both parties).
  - Crystal clear voice connectivity even on unstable 3G/4G networks.
  - Instant call state telemetry and zero-server calling topology.

## Epic 5: Pro Schedule & Appointment Booking
- **Plane Module ID**: `768489a4-f5fc-4543-9300-3fe8420c5e91`
- **Objective**: Public availability calendar allowing pros to publish their open job slots, manage site visit bookings, and prevent double-booking with WhatsApp confirmation alerts.
- **Key Vectors**:
  - Lightweight weekly/monthly slot publishing for field technicians.
  - Client-side site visit request with job address and description.
  - Instant two-way confirmation via WhatsApp notification hooks.
  - Conflict prevention and multi-day project lock-in.

## Epic 6: Sovereign UPI Payments Rail
- **Plane Module ID**: `20900145-20a4-460d-b056-cff2035369ce`
- **Objective**: Direct peer-to-peer UPI intent links and dynamic QR payment collection (send & receive advance deposits, daily wages, and milestone completions) with zero platform fee extraction under Aram (அறம்).
- **Key Vectors**:
  - Dynamic `upi://pay` deep link generation for Google Pay, PhonePe, Paytm, and BHIM.
  - On-screen QR code generation for desktop-to-mobile payment scanning.
  - Transparent payment milestone states (Advance Deposit, Material Advance, Final Handover).
  - 0% commission: 100% of the funds go directly into the worker's bank account.
