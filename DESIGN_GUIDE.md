# KT Foundation - Design & Brand Guide

## Brand Identity

### Foundation Name
**The KT Foundation**
- "KT" stands for Kersey Thermidor
- Full name used in formal contexts
- "KT" logo used as shorthand

### Tagline
"Turning tragedy into hope, one life at a time"

### Mission Statement
The KT Foundation honors Kersey Thermidor's memory by supporting families affected by childhood acute lymphoblastic leukemia, funding research for better treatments, and raising awareness about this devastating disease.

---

## Color Palette

### Primary Colors
```css
Orange 600: #ff6c0a  /* Main brand color - Leukemia awareness */
Orange 500: #ff8533  /* Lighter accent */
Orange 400: #ffab6b  /* Hover states */
Orange 300: #ffcba3  /* Backgrounds */
Orange 100: #ffe4d1  /* Light backgrounds */
Orange 50:  #fff2eb  /* Subtle backgrounds */
```

### Supporting Colors
```css
White:      #ffffff  /* Primary background */
Gray 900:   #1d1d1f  /* Primary text */
Gray 700:   #374151  /* Secondary text */
Gray 600:   #6b7280  /* Tertiary text */
Gray 200:   #e5e7eb  /* Borders */
Gray 50:    #f9fafb  /* Subtle backgrounds */
```

### Why Orange?
Orange is the official awareness color for leukemia. It represents:
- Hope and energy
- Warmth and compassion  
- Healing and strength
- The fight against leukemia

---

## Typography

### Font Families
- **Primary:** Satoshi Variable (body text, UI)
- **Brand/Display:** Array Bold (headlines, emphasis)

### Font Sizes
```css
Hero Heading:     text-7xl to text-9xl (72px - 128px)
Section Heading:  text-5xl to text-7xl (48px - 72px)
Subheading:       text-2xl to text-3xl (24px - 30px)
Body Large:       text-xl (20px)
Body:             text-base to text-lg (16px - 18px)
Small:            text-sm (14px)
```

---

## Key Messaging

### Hashtag
**#KTStrong** - Used across all platforms and materials

### Core Values
1. **Hope** - We believe in a future without childhood leukemia
2. **Support** - We stand with families through their darkest days
3. **Action** - We turn grief into meaningful change
4. **Transparency** - We're accountable to our donors and families
5. **Community** - Together, we're stronger

### Voice & Tone
- **Compassionate** but not pitying
- **Hopeful** but realistic
- **Professional** but warm
- **Action-oriented** but respectful
- **Grateful** for all support

---

## Visual Elements

### Imagery Guidelines
1. **Photos of Kersey:**
   - Always respectful and dignified
   - Show his personality and spirit
   - Include family approval

2. **Family Photos:**
   - Obtain written consent
   - Focus on hope and resilience
   - Protect privacy when requested

3. **Event Photos:**
   - Show community engagement
   - Capture emotional moments
   - Highlight volunteer efforts

4. **Medical/Research:**
   - Use professional imagery
   - Avoid overly clinical shots
   - Focus on progress and hope

### Icons & Symbols
- 🎗️ Orange ribbon (leukemia awareness)
- ❤️ Heart (support and love)
- 🔬 Microscope (research)
- 👥 People (community)
- 🏠 Home (family support)

---

## Component Styles

### Buttons

**Primary (Donate/CTA):**
```css
Background: Orange 600 (#ff6c0a)
Hover: Orange 700
Text: White
Border Radius: Full (rounded-full)
Padding: px-8 py-4
Shadow: Large
Transform: Scale 1.05 on hover
```

**Secondary:**
```css
Background: White
Border: 2px Orange 600
Text: Orange 600
Hover: Orange 50 background
```

### Cards
```css
Background: White
Border: 2px Orange 100
Border Radius: 2xl (rounded-2xl)
Shadow: lg
Hover: Border Orange 300, Shadow xl
Padding: p-6
```

### Navigation
```css
Background: White/90 with backdrop blur
Border: 2px Orange 200
Active State: Orange 600 background
Icons: Orange 600 when active, Gray 400 when inactive
```

---

## Section Breakdown

### 1. Hero Section
**Purpose:** Immediate emotional connection and clear mission
**Elements:**
- Large hero image of Kersey
- Foundation name with gradient
- Tagline
- Two CTAs: "Donate Now" (primary) and "Learn More" (secondary)
- Three stat cards with key facts

**Background:** Gradient from orange-50 to white

---

### 2. About Kersey Section
**Purpose:** Tell Kersey's story and the foundation's origin
**Elements:**
- "Remembering Kersey Thermidor" heading
- Birth and passing dates
- Personal narrative (2-3 paragraphs)
- #KTStrong badge
- Transition to mission statement

**Background:** White to orange-50 gradient

---

### 3. Mission Section (Bento Grid)
**Purpose:** Explain the three pillars and show impact
**Elements:**
- "Our Mission" heading
- Visual cards for each pillar
- Testimonials from beneficiaries
- Research highlights
- Community engagement

**Background:** White

---

### 4. Community/Testimonials
**Purpose:** Social proof and emotional connection
**Elements:**
- "Our Community" heading
- 6 testimonial cards
- Names, roles, photos
- 5-star ratings
- Diverse perspectives (families, doctors, donors, volunteers)

**Background:** White

---

### 5. Ways to Give
**Purpose:** Convert visitors to donors
**Elements:**
- Three giving tiers with clear benefits
- Additional giving options (corporate, planned, memorial)
- 501(c)(3) notice
- Multiple CTAs

**Background:** Orange-50 to white gradient

---

### 6. FAQ Section
**Purpose:** Address common questions and build trust
**Elements:**
- 5 key questions about mission, donations, ALL, involvement, nonprofit status
- Expandable accordions
- Contact CTA at bottom

**Background:** Orange-50

---

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile-First Approach
- Stack elements vertically on mobile
- Reduce font sizes appropriately
- Ensure touch targets are 44px minimum
- Simplify navigation to bottom-fixed bar

---

## Accessibility

### WCAG 2.1 AA Compliance
- Color contrast ratio: 4.5:1 for normal text
- Color contrast ratio: 3:1 for large text
- All interactive elements keyboard accessible
- Focus states clearly visible
- Alt text for all images
- Semantic HTML structure

### Screen Reader Considerations
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels where needed
- Skip navigation links
- Descriptive link text

---

## Animation Guidelines

### Framer Motion Usage
- **Entrance animations:** FadeIn, ShiftInUp
- **Hover effects:** Scale, color transitions
- **Scroll animations:** Reveal, parallax (subtle)
- **Duration:** 0.3s - 0.6s (not too slow)
- **Easing:** Spring animations for natural feel

### Animation Principles
1. **Purpose:** Every animation should have a reason
2. **Subtlety:** Don't distract from content
3. **Performance:** Optimize for 60fps
4. **Accessibility:** Respect prefers-reduced-motion

---

## Content Guidelines

### Writing Style
- **Headlines:** Clear, emotional, action-oriented
- **Body Copy:** Conversational but professional
- **CTAs:** Direct and specific ("Donate Now" not "Click Here")
- **Statistics:** Always cite sources
- **Stories:** Focus on hope and resilience

### Dos and Don'ts

**Do:**
✅ Focus on hope and action
✅ Honor Kersey's memory with dignity
✅ Show gratitude to supporters
✅ Be transparent about fund usage
✅ Celebrate small victories

**Don't:**
❌ Use overly clinical language
❌ Focus only on tragedy
❌ Make promises you can't keep
❌ Exploit emotional stories
❌ Ignore privacy concerns

---

## Social Media

### Platforms
- Instagram: @ktfoundation
- Facebook: /ktfoundation
- Twitter/X: @ktfoundation
- LinkedIn: KT Foundation

### Post Types
1. **Impact Stories** - Weekly family features
2. **Research Updates** - Monthly progress reports
3. **Event Announcements** - As scheduled
4. **#KTStrong Moments** - Daily inspiration
5. **Donor Spotlights** - Bi-weekly recognition
6. **Educational Content** - ALL awareness facts

### Hashtags
Primary: #KTStrong
Secondary: #ChildhoodCancer #LeukemiaAwareness #ALL #CancerResearch #NonprofitOrg

---

## Print Materials

### Business Cards
- Front: KT logo, name, title
- Back: Website, email, phone, #KTStrong

### Brochures
- Tri-fold format
- Orange accent color
- High-quality photos
- Clear donation instructions

### Event Materials
- Banners with #KTStrong
- Orange ribbons for participants
- Donation cards
- Thank you cards

---

## Legal & Compliance

### Required Disclosures
- 501(c)(3) status
- Tax ID number
- "Donations are tax-deductible"
- Privacy policy link
- Contact information

### Photo Releases
- Required for all family photos
- Specify usage rights
- Offer anonymity option
- Store securely

---

## Contact Information

**Email:** info@ktfoundation.org
**Phone:** [To be added]
**Address:** [To be added]
**Website:** thekt.org

---

**Last Updated:** December 20, 2025
**Version:** 1.0

*This guide is a living document and will be updated as the foundation grows.*

#KTStrong 🎗️


