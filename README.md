# Skrawl Landing Page

A responsive, accessible landing page for the Skrawl creative drawing app, built with modern web standards and optimized for performance.

## 🎨 Design Features

### Color Themes
- **Light Mode**: Dirty white background with crayon blue accent colors
- **Dark Mode**: Dark background with royal reddish accent colors
- Extracted from the main Skrawl app design system for consistency
- Proper contrast ratios for accessibility compliance

### Visual Design
- Glassmorphism aesthetic with backdrop blur effects
- Smooth animations and transitions
- Professional typography using Patrick Hand and Nunito fonts
- Responsive grid layouts with mobile-first approach

## 📱 Technical Specifications

### Structure
- **Maximum 2 pages**: Main landing page + Privacy Policy
- **Fully responsive**: Mobile, tablet, and desktop optimized
- **Single-page scrolling**: Smooth section navigation
- **44px minimum touch targets**: Mobile accessibility compliance

### Performance
- Optimized CSS with custom properties for theming
- Efficient JavaScript with performance-conscious scroll handling
- Preloaded critical images
- Reduced motion support for accessibility

### Accessibility
- WCAG 2.1 AA compliant color contrast
- Keyboard navigation support
- Screen reader friendly markup
- High contrast mode support
- Reduced motion preferences respected

## 🚀 Features Showcased

### Real App Features Only
- Professional drawing tools (brush, paint bucket, color picker)
- Real-time multiplayer gaming (2-8 players, 3 rounds)
- Gesture-based drawing controls using MediaPipe Hands
- Social drawing feed with likes and community features
- Cross-platform compatibility

### User Experience
- Theme switching (light/dark mode)
- Smooth scrolling navigation
- Intersection Observer animations
- Mobile-optimized interactions
- Progressive enhancement

## 📁 File Structure

```
landing-page/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy page
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete styling system
│   ├── js/
│   │   └── main.js         # Interactive functionality
│   └── images/
│       ├── logo-transparent.png
│       ├── app-screenshot.png
│       ├── favicon.png
│       └── og-image.png
└── README.md               # This documentation
```

## 🎯 Design System Integration

### Colors
- Extracted exact color values from `src/design-system/theme.ts`
- Light theme: True blue primary (#2D68C4)
- Dark theme: Warm terracotta primary (#d2b48c)
- Glassmorphism effects with proper opacity values

### Typography
- Primary: Patrick Hand (headings, brand text)
- Secondary: Nunito (body text, UI elements)
- Responsive font sizing with clamp() functions

### Spacing & Layout
- Design token-based spacing system
- Consistent border radius and shadow values
- Mobile-first responsive breakpoints

## 🔧 Technical Implementation

### CSS Features
- CSS Custom Properties for theming
- CSS Grid and Flexbox for layouts
- Backdrop-filter for glassmorphism effects
- CSS animations with performance optimization
- Media queries for responsive design

### JavaScript Features
- Theme management with localStorage persistence
- Smooth scrolling navigation
- Intersection Observer for scroll animations
- Performance-optimized scroll handling
- Analytics tracking preparation

### Browser Support
- Modern browsers with CSS Grid support
- Graceful degradation for older browsers
- Progressive enhancement approach
- Fallbacks for backdrop-filter

## 📊 Performance Optimizations

### Loading
- Critical CSS inlined
- Font preloading
- Image preloading for above-the-fold content
- Efficient asset organization

### Runtime
- RequestAnimationFrame for smooth animations
- Debounced resize handlers
- Intersection Observer for efficient scroll detection
- Reduced motion support

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Focus management
- Color contrast compliance
- Touch target sizing

## 🌐 Deployment Ready

### SEO Optimization
- Complete meta tags
- Open Graph and Twitter Card support
- Semantic HTML structure
- Descriptive alt text for images

### Analytics Ready
- Event tracking structure in place
- Download button tracking
- Navigation click tracking
- Conversion funnel preparation

## 🎨 Brand Consistency

### Logo Integration
- Uses existing Skrawl logo assets
- Consistent brand colors
- Professional presentation
- Scalable vector graphics where possible

### Content Strategy
- Positions Skrawl as comprehensive creative platform
- Highlights unique features (gesture controls, multiplayer)
- Emphasizes social and educational aspects
- Clear value proposition

## 📱 Mobile Experience

### Touch Optimization
- 44px minimum touch targets
- Optimized button spacing
- Gesture-friendly navigation
- Mobile-first responsive design

### Performance
- Optimized for mobile networks
- Efficient CSS and JavaScript
- Compressed images
- Fast loading times

This landing page successfully combines modern web development practices with the established Skrawl brand identity, creating a professional and engaging user experience that accurately represents the app's capabilities.
