# Greenjeeva Price Trends Dashboard - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from data-driven platforms like Rawbids.com, TradingView, and CoinMarketCap, while maintaining complete compatibility with Greenjeeva.com's existing eCommerce design aesthetic. This dashboard emphasizes transparency, data visualization, and professional market insights presentation.

## Core Design Principles
1. **Data Transparency**: Clear, honest presentation of pricing information with visual hierarchy
2. **Professional Trust**: Clean, modern interface that conveys credibility and expertise
3. **Greenjeeva Brand Consistency**: Seamless integration with existing site design language
4. **Actionable Insights**: Information presented in digestible, decision-enabling formats

---

## Typography

**Primary Font**: Inter or similar modern sans-serif via Google Fonts
- Hero Headlines: font-semibold text-4xl md:text-5xl
- Section Titles: font-semibold text-2xl md:text-3xl
- Product Names: font-medium text-xl
- Body Text: font-normal text-base
- Data Labels: font-medium text-sm
- Chart Labels: font-normal text-xs text-gray-600

**Hierarchy**: Establish clear distinction between headings (price insights), data points (numerical values), and supporting text (descriptions/context)

---

## Layout System

**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, m-8, gap-6)

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-6
- Content sections: py-12 md:py-20 for vertical rhythm
- Card spacing: gap-6 md:gap-8 in grids

**Grid Patterns**:
- Product cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Insights metrics: grid-cols-2 md:grid-cols-4
- Comparison view: Two-column split on desktop (60/40 for chart vs. details)

---

## Color System & Data Visualization

**Brand Colors** (Match existing Greenjeeva):
- Primary Green: #3CB371 (for positive trends, CTAs, brand elements)
- Accent variations: lighter/darker shades for hover states

**Data-Specific Colors**:
- Price Decrease (Good): #10B981 (green-500)
- Price Increase (Alert): #EF4444 (red-500)
- Neutral/Stable: #6B7280 (gray-500)
- Greenjeeva Price Line: #3CB371 (bold, 2.5px stroke)
- Competitor Lines: #94A3B8 (gray-400), #CBD5E1 (gray-300) - muted, 1.5px stroke
- Background overlays: white/gray-50 cards with subtle shadows

**Chart Design**:
- Clean grid lines (gray-200, 1px, subtle)
- Smooth line curves (monotone interpolation)
- Hover tooltips: white background, shadow-lg, rounded-lg, p-3
- Data points: visible on hover only (don't clutter)

---

## Component Library

### 1. Hero Section (Price Trends Overview)
- Full-width banner background: subtle gradient from white to green-50
- Centered headline + subheading
- **Aggregate Line Chart**: 
  - Height: h-64 md:h-80
  - Shows average market price trend over 4-8 weeks
  - Multiple competitor lines (semi-transparent) vs. Greenjeeva (bold)
- **Key Insights Cards** (below chart):
  - Three cards in grid: "Avg Price Change", "Top 5 Price Drops", "Top 5 Price Increases"
  - Each card: white background, rounded-xl, p-6, shadow-sm
  - Large percentage numbers with colored arrows (↓/↑)

### 2. Product Price Comparison Cards
- Card container: bg-white rounded-xl shadow-sm border border-gray-100 p-6
- Left side: Product image (rounded-lg, 120x120px)
- Center: Product name, SKU, short description
- Right side: Mini line chart (h-32 w-full)
- Below chart: Toggle buttons for competitor selection (chip-style, rounded-full)
- Price Position Badge: "12% below market avg" in green-100 background, green-700 text

### 3. Interactive Product Listing
- Search bar: prominent, w-full md:w-96, with search icon, rounded-full
- Category filters: horizontal scrollable chips (bg-gray-100, hover:bg-green-50)
- Product grid cards:
  - Product image at top
  - Product name + price
  - **Weekly % change badge**: Colored pill (green/red), positioned top-right
  - "View Price Trend" button: text-green-600 with arrow icon

### 4. Product Detail Page Integration
- Two-column layout (desktop): 
  - Left: Product image, description, specifications
  - Right: Large price comparison chart
- Price history table below: striped rows, sortable columns
- Competitor comparison section with expandable details

### 5. Market Insights Section
- Four-column grid for stats: "Products Monitored", "Competitors Tracked", "Weekly Updates", "Next Update"
- Each stat: Large number (text-4xl font-bold), small label below
- Icons above each stat (chart icon, users icon, calendar icon, clock icon)

### 6. Footer
- Three-column layout: Quick Links, About, Contact
- Tagline: "Empowering Buyers with Transparent Market Insights" - italic, text-sm, text-gray-500
- Social icons (if applicable)
- Newsletter signup: inline form with green button

---

## Interactive Elements & Animations

**Chart Interactions**:
- Hover tooltips appear smoothly (transition-opacity duration-200)
- Crosshair on hover showing exact price/date
- Click data points to expand details

**Buttons**:
- Primary CTA: bg-green-600 hover:bg-green-700 rounded-lg px-6 py-3
- Secondary: border border-green-600 text-green-600 hover:bg-green-50
- When on images: backdrop-blur-sm bg-white/90

**Cards**:
- Subtle hover lift: hover:shadow-lg transition-shadow duration-300
- No scale transforms (keep professional)

**Animations**: Minimal - only fade-in on scroll for sections (using Framer Motion sparingly)

---

## Responsiveness

**Mobile (base)**:
- Stack all multi-column layouts to single column
- Charts: maintain aspect ratio, reduce height to h-48
- Horizontal scroll for category filters
- Hamburger menu if needed

**Tablet (md:)**:
- Two-column grids where appropriate
- Charts expand to h-64

**Desktop (lg:)**:
- Full multi-column layouts
- Charts at optimal h-80
- Side-by-side comparisons

---

## Images

**Hero Section**: No large hero image - focus on data/charts
**Product Cards**: Square product images (1:1 ratio, 120x120px to 200x200px)
**Product Detail**: Larger product image (400x400px) with zoom capability
**Market Insights**: Icon graphics only (use Heroicons)

All product images should have subtle rounded corners (rounded-lg) and maintain consistent aspect ratios across the dashboard.

---

## Data Presentation Best Practices

- Always show data source timestamp ("Updated: 2 hours ago")
- Use percentage changes with directional arrows
- Color-code consistently (green=good/decrease, red=alert/increase)
- Provide context ("vs. last week", "compared to market avg")
- Show sample size ("Based on 15 competitors")