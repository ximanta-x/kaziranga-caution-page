# kaziranga-caution-page# Kaziranga Site

## Overview
Independent educational platform maintained by Ximanta (Student) for documentation, transparency, and learning related to the Kaziranga region.

## Project Status
Non-official, non-commercial educational website with no government affiliation or endorsement.

## File Structure
/public
├── index.html # Home page - Overview & transparency
├── about.html # Identity, biography, and profile
├── purpose.html # Educational intent and objectives
├── notice.html # Legal & communication notice
├── projects.html # Registry of subdomains/projects
├── contact.html # Contact form for formal communication
├── privacy.html # Privacy policy
├── terms.html # Terms of use
│
├── css/
│ └── main.css # All styles (no inline CSS)
│
├── js/
│ └── main.js # All JavaScript (no inline JS)
│
└── assets/
├── logo.svg # Site logo
├── profile.jpg # Profile photo
└── signature.png # Signature image


## 🎯 Website Goals
- Public transparency and documentation
- Educational resource for the Kaziranga region
- Prevention of misinformation through verified content
- Proper legal communication channels
- Calm handling of disputes through formal processes

## ⚖️ Legal Positioning
- Clearly states non-official status
- No representation of any authority
- No implication of government endorsement
- Encourages written, lawful communication
- States cooperation with due process

## 🔐 Security Requirements
- Frontend never handles secrets, API keys, or tokens
- Contact form submits to `/api/contact` (server-side processing)
- All sensitive processing handled server-side
- No client-side bot integrations

## 🎨 Design Standards
Follows global government website design patterns (gov.uk, india.gov.in, usa.gov):
- White background
- Dark blue / dark green accents
- Roboto and system fonts only
- Clear grid layout
- High readability
- No animations, gradients, parallax, or creative effects

## 📋 Pages Description

### index.html
Overview page with transparency statement, domain context clarification, and core principles.

### about.html
Identity verification with biography, profile photo, and platform nature explanation.

### purpose.html
Detailed educational intent, objectives, scope, and methodology.

### notice.html
Legal notice with communication protocol, domain clarification, and cooperation statement.

### projects.html
Registry of subdomains and projects with transparency documentation.

### contact.html
Contact form for formal written communication with server-side processing.

### privacy.html
Privacy policy detailing minimal data collection and security practices.

### terms.html
Terms of use governing website access and content usage.

## 🧭 Header & Footer Elements
**Header:**
- Site logo from `/assets/logo.svg`
- Site title "Kaziranga Site"
- Navigation menu (mobile hamburger)
- All navigation items

**Footer (on every page):**
- Non-official disclaimer
- Signature from `/assets/signature.png`
- Privacy & Terms links
- Copyright notice
- Legal statement

## 🔧 Technical Implementation

### CSS (`/css/main.css`)
- No inline styles
- Mobile-responsive design
- Government-style typography and spacing
- Accessible color contrast
- No animations or transitions

### JavaScript (`/js/main.js`)
- No inline scripts
- Handles mobile menu toggle
- Contact form submission to `/api/contact`
- No client-side secrets or API keys
- Minimal, functional code only

### Assets
- `/assets/logo.svg` - Simple, professional logo
- `/assets/profile.jpg` - Profile photo (placeholder)
- `/assets/signature.png` - Signature image (placeholder)

## ❌ Strictly Forbidden
- Inline CSS or JavaScript
- Comments in HTML, CSS, or JS files
- Fancy UI elements or creative effects
- Animations of any kind
- Incorrect personal name (must be Ximanta Bhuyan)
- Client-side secrets or API keys
- SPA routing or dynamic page swaps
- Hidden sections or page transitions

## 📞 Contact & Communication
All formal communications must be made through:
1. Contact form on `/contact.html` (submits to server-side endpoint)
2. Written correspondence through proper legal channels

## 📄 License & Usage
This website content is protected under standard copyright. The platform respects applicable laws and due process. Content is subject to correction upon proper lawful communication.

## 🛠️ Development Notes
- Built as a static website for maximum compatibility
- No build process or compilation required
- All files directly servable by any web server
- Cross-browser compatible (IE11+)
- Mobile-first responsive design

## 🔄 Updates & Corrections
Content on this platform may be updated, corrected, or removed:
- Upon verification of factual inaccuracies
- In response to proper lawful communication
- To comply with legal requirements
- For educational improvement

---
**Maintainer:** Ximanta (Student)  
**Platform:** Independent Educational Website  
**Status:** Non-official, Non-commercial, Educational  
**Last Updated:** 2026


**SECURITY.md**
```markdown
# Security Protocol

## Frontend Security
- No API keys, tokens, or secrets in JavaScript
- No client-side form processing (all server-side)
- No analytics or tracking scripts
- No third-party widgets or embeds
- Content Security Policy recommended

## Backend Security (Contact Form)
1. **Input Validation**
   - Sanitize all user inputs
   - Validate email format
   - Check for malicious content

2. **Rate Limiting**
   - Implement request throttling
   - Prevent spam submissions
   - Monitor unusual patterns

3. **Data Storage**
   - Encrypt sensitive data
   - Regular backup schedule
   - Access logging

## Server Security
- Keep server software updated
- Use firewall (UFW/iptables)
- Regular security patches
- Monitor intrusion attempts
- Secure SSH configuration

## Compliance
- Follow GDPR principles for EU visitors
- Respect local data protection laws
- Maintain transparency logs
- Cooperate with lawful requests

## Incident Response
1. Immediate isolation of affected systems
2. Preservation of logs and evidence
3. Notification to affected parties if required
4. Implementation of corrective measures
5. Documentation of incident and resolution
