# Marlie's Restaurant Website — Design Specification

Date: 2026-09-16

## Goal
Create a polished, standalone marketing website for Marlie's Restaurant in French Settlement, Louisiana. The project must live as a normal local website folder with no ChatGPT/OpenAI Sites scaffolding. The site should make the restaurant look established, appetizing, and easy to visit or order from.

## Verified Business Information
- Name: Marlie's Restaurant
- Address: 16525 LA-16, French Settlement, LA 70733
- Phone: (225) 698-5100
- Opened: March 1, 2023
- Owners/partners publicly introduced at launch: Micah and Cory
- Hours:
  - Monday: Closed
  - Tuesday: Closed
  - Wednesday: 11:00 AM–8:00 PM
  - Thursday: 11:00 AM–9:00 PM
  - Friday: 11:00 AM–9:00 PM
  - Saturday: 11:00 AM–9:00 PM
  - Sunday: 10:00 AM–2:00 PM
- Instagram: @marliestable
- Facebook: https://www.facebook.com/profile.php?id=100089179489103
- DoorDash: https://www.doordash.com/en/store/marlies-restaurant-french-settlement-36252247/

## Visual Direction
A warm, rustic South-Louisiana restaurant aesthetic based on the real interior: dark charcoal/black, warm cypress/wood tones, cream typography, subtle olive/foliage accents, restrained gold/brass details. Use large food photography, wood texture, soft glow, and tasteful motion. Avoid generic restaurant-template styling.

## Site Structure
### Header
- Marlie's wordmark/logo treatment
- Navigation: Home, Menu, About, Gallery, Visit
- Primary CTA: Order Online
- Mobile menu

### Hero
- Large food or dining-room image
- Headline positioning Marlie's as local seafood, steaks, and Louisiana comfort food
- CTAs: View Menu / Order Online
- Quick chips for French Settlement, family owned, established 2023

### Signature Dishes
Feature verified/current popular dishes:
- Ribeye
- Marlie's Sampler
- Catfish Atchafalaya
- Stuffed Mushrooms
- Seafood Gumbo
- Fried Seafood Platters
- Hamburger Steak
- Crab Pasta / seafood specialties

### Our Table / Story
Short section about the restaurant opening in 2023 and its local-community focus. Use only verified public facts; do not invent family history.

### Menu
Organize into real categories surfaced by DoorDash/current menu sources:
- Featured Items
- Children's Entrees
- Daily Specials
- Appetizers
- Gumbo & Soup
- Sandwiches
- Specialties
- Seafood Platters
- Grill
- Chicken
- Sides
- Alcohol
- Catering

For the initial client-demo version, show representative verified items and a note that prices/menu can change. Avoid presenting an incomplete scraped menu as exhaustive. Link to DoorDash for the current orderable menu.

Verified featured prices currently surfaced by DoorDash include:
- Ribeye — $40.95
- Marlie's Sampler — $49.95
- Single Dinner — $24.98
- Trio Platter — $30.95
- 10oz Sirloin — $29.95
- Cory's Crab Platter — $40.00
- Catfish Atchafalaya — $27.95
- Hamburger Steak — $20.95
- Seafood Potato — $22.95
- Boiled Shrimp — $16.95

### Gallery
Use authentic publicly available restaurant/interior/food imagery found online for the private/demo build. Prefer restaurant-owned/social imagery where feasible. Store assets locally with descriptive filenames and source notes. Do not use unrelated stock food photos when authentic photos are available.

### Reviews / Social Proof
Use short paraphrased review themes rather than long copied reviews:
- generous portions
- welcoming service
- strong seafood and steak reputation
- casual, family-friendly atmosphere

### Visit
- Address
- Click-to-call phone number
- Hours
- Map/directions link
- Facebook / Instagram links
- Order Online -> DoorDash

### Footer
Business details, hours summary, social links, DoorDash CTA, Side Quest Creative demo attribution if desired.

## Functional Requirements
- Responsive desktop/tablet/mobile layout
- Smooth but restrained scroll/entrance animations
- Sticky mobile-friendly order CTA
- DoorDash links open the verified Marlie's DoorDash store
- Click-to-call phone
- Maps/directions link
- SEO title/description and LocalBusiness/Restaurant structured data
- Optimized local images and lazy loading
- Accessible semantic markup, keyboard focus states, readable contrast

## Technical Approach
Use a simple modern static front end that is easy to deploy to Vercel and easy to hand off. Prefer Vite + React unless the working environment shows a simpler established pattern. No backend is required for the first demo because ordering is delegated to DoorDash and there is no reservation system to build.

## Validation
- Verify every external CTA target before finalizing
- Test responsive widths at 390px, 768px, 1440px
- Test all navigation, social, phone, maps, and DoorDash links
- Confirm no broken/missing images
- Confirm no horizontal overflow on mobile
- Run production build before delivery

## Research Sources
- DoorDash current store/menu listing
- Restaurantji current listing/reviews/hours
- Restaurant Guru current listing and imagery
- Livingston Parish Chamber opening announcement
- Public Facebook/Instagram references surfaced in local listings
- Zmenu current menu-photo listing for cross-checking only
