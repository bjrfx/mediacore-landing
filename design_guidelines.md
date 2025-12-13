# MediaCore Marketing Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium spiritual/wellness platforms like Calm, Headspace, and Spotify's calming aesthetic. The design emphasizes tranquility, focus, and premium quality while maintaining conversion optimization.

## Core Design Principles
- **Spiritual Serenity**: Calm, mindful, distraction-free experience
- **Glassmorphism Premium**: Modern liquid glass aesthetic throughout
- **Conversion-Focused**: Clear visual hierarchy guiding users to CTAs
- **Trust & Credibility**: Professional polish with accessible design

## Typography System

**Font Families**:
- Primary: Inter (Google Fonts) - clean, modern, highly readable
- Accent: Playfair Display (Google Fonts) - elegant headlines for spiritual tone

**Typography Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, Playfair Display
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-bold
- Feature Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- CTAs: text-lg md:text-xl, font-semibold

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text sections)

**Grid Structure**:
- Hero: Full-width with centered content
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Two-column sections: grid-cols-1 lg:grid-cols-2

## Glassmorphism Implementation

**Glass Card Styling**:
```
Background: Semi-transparent white (bg-white/10 or bg-white/20)
Backdrop blur: backdrop-blur-md to backdrop-blur-xl
Border: border border-white/20
Shadow: shadow-xl with subtle glow
Padding: p-8 md:p-12
Rounded corners: rounded-2xl to rounded-3xl
```

**Hero Glass Container**:
- Stronger blur effect: backdrop-blur-2xl
- Multiple layered glass effects
- Subtle gradient overlays

**Feature Cards**:
- backdrop-blur-lg
- Hover: transform scale-105, increased glow
- Transition: transition-all duration-300

## Component Library

### Navigation (Minimal)
- Transparent/glass navbar with logo
- Sticky positioning
- CTA button in top-right

### Hero Section
- Full-viewport height (min-h-screen)
- Large background image (serene spiritual imagery: meditation, nature, peaceful scenes)
- Glassmorphism overlay container centered
- Headline + subheadline + primary CTA
- Soft gradient overlay on image (purple/blue tones)

### Content Sections
**What is MediaCore**: Two-column layout with text + supporting visual
**Key Features**: 3-column grid with glass cards, icons, titles, descriptions
**Why MediaCore**: Centered content with philosophy points in glass containers
**App Availability**: Platform icons with glass card wrapping
**Final CTA**: Full-width glass hero-style section with prominent button

### CTA Buttons
**Primary CTA** (on images/hero):
- Glass background: bg-white/20 backdrop-blur-md
- Large padding: px-10 py-5 md:px-12 md:py-6
- White text with subtle shadow
- No hover interactions (let Button component handle)
- rounded-full

**Secondary CTAs**:
- Standard shadcn/ui Button component
- Larger size variants

### Feature Cards
Each card includes:
- Icon (spiritual-themed from Lucide React)
- Feature title
- 2-3 sentence description
- Glass styling as specified above

### Trust Elements
- "100% Free • No Ads • No Credit Card" badge in hero
- "Web App Live Now" indicator
- "Mobile Apps Coming Soon" badge

## Animations
**Minimal & Purposeful**:
- Fade-in on scroll for sections (once)
- Subtle hover scale on cards (scale-105)
- Smooth CTA button glow pulse
- NO complex scroll-triggered animations
- NO parallax effects
- NO distracting motion

## Images

**Hero Background**:
- Large, high-quality spiritual/meditation image
- Peaceful nature scene, meditation pose, or abstract calming visuals
- Soft purple-blue gradient overlay (opacity 60-70%)

**Section Supporting Images**:
- App screenshots in glass frames
- Abstract spiritual graphics (mandalas, peaceful symbols)
- Platform availability icons

**Icons**: Lucide React icons throughout for features (Headphones, Heart, Shield, Sparkles, etc.)

## Accessibility
- WCAG AA contrast ratios maintained
- Focus states on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support

## Responsive Breakpoints
- Mobile: Base (< 768px) - single column, larger touch targets
- Tablet: md (768px+) - two columns where appropriate
- Desktop: lg (1024px+) - full multi-column layouts
- XL: xl (1280px+) - max-width containers with breathing room

## Page Flow & Sections (in order)
1. **Hero**: Immediate impact with image, glass container, headline, CTA
2. **What is MediaCore**: Two-column explanation with visual
3. **Key Features**: 3-column glass cards grid
4. **Why MediaCore**: Centered philosophy with bullet points in glass containers
5. **App Availability**: Platform showcase with glass cards
6. **Final CTA**: Hero-style glass section with prominent button
7. **Footer**: Minimal links and branding

**Critical**: Each section is fully developed with rich content, multiple elements, and professional polish. No sparse layouts.