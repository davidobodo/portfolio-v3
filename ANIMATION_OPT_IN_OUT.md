# Animation Opt-In/Out

## Overview

Currently, the portfolio site uses animations throughout the user experience. We plan to add a feature that allows users to choose whether to enable or disable animations when they first visit the site. If the user opts out, the site will be presented as a static, non-animated experience.

## Implementation Plan

1. **Show Modal on First Visit**

   - On initial load, display a modal/dialog asking: "Would you like to enable animations?"
   - Options: "Yes" (enable) and "No" (disable).
   - Store the user's choice in `localStorage` to remember their preference.

2. **Global Animation Context**

   - Create a React context (e.g., `AnimationContext`) to store the animation preference.
   - Wrap the app in this context provider (in `_app.jsx` or `_app.tsx`).
   - All animation hooks/components should read from this context to determine if they should animate.

3. **Update Animation Hooks/Components**

   - Update custom animation hooks (e.g., `useRevealParagraph`, `useWorkAnimation`, etc.) to check the animation context.
   - If animations are disabled, these hooks should return no-ops or static values.

4. **SSR Fallback**
   - On SSR, default to animations enabled (or disabled) until the client preference is known.

## Next Steps

- Implement the above plan step-by-step.
- Test both animation-enabled and animation-disabled modes for UX and accessibility.

---

Implementation Steps
Create AnimationContext
Create Animation Opt-In Modal
Wrap App with Provider
Update Animation Hooks
Test Both Modes
