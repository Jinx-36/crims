# CrimsAI - Design & Animation Guidelines

## Visual Identity
- **Primary Colors:** Deep Burgundy/Crimson (extracted from `logo-crims-bm1.jpg`), Off-white/Cream backgrounds for a premium feel.
- **Typography:** Sans-serif for clean readability (e.g., Inter or Geist), perhaps a subtle serif for H1 headers to match the elegance of the fairy logo.
- **Vibe:** High-end beauty, structural, clean, no clutter.

## Animation Rules (Framer Motion)
1. **Smooth Scrolling:** Implement a smooth scroll experience across the entire site (e.g., using Lenis or Framer Motion scroll features).
2. **Page Transitions:** Soft fade-ins when navigating between the 5 main routes.
3. **Scroll Reveals:** 
   - Text elements (H1, H2, Supporting copy) should use a subtle upward fade-in (`y: 20, opacity: 0` to `y: 0, opacity: 1`) as they enter the viewport.
   - Stagger children animations for lists (e.g., the 8 steps in the methodology, or the 5 values).
4. **Hover States:** CTAs ("Réserver un appel découverte")[cite: 1] should have fluid, non-jarring hover scaling or color transitions.
