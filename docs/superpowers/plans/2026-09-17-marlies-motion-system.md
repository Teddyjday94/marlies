# Marlie's Motion System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a polished, lightweight animation system across all six Marlie's pages using native CSS and JavaScript.

**Architecture:** A shared motion layer in `styles.css` and `app.js` will progressively enhance existing markup. JavaScript assigns reveal, image-motion, and stagger classes using `IntersectionObserver`, adds hero parallax with `requestAnimationFrame`, and manages the scrolled header state. CSS owns timing, easing, hover states, mobile nav transitions, cross-document view transitions, and reduced-motion fallbacks.

**Tech Stack:** HTML, CSS, vanilla JavaScript, IntersectionObserver, requestAnimationFrame, CSS View Transitions.

**Spec:** Approved in conversation on 2026-09-17.

## Global Constraints

- Preserve all six pages, current content, imagery, menu layout, alignment fixes, and DoorDash links.
- No GSAP or other animation dependency.
- No rotated text, bounce effects, glow effects, or exaggerated motion.
- `prefers-reduced-motion: reduce` must disable nonessential motion.
- Motion must remain subtle enough for restaurant browsing and mobile devices.

---

### Task 1: Motion regression checks
**Files:** Modify `test_site.py`
- [ ] Add checks for motion CSS marker, reduced-motion support, view transitions, IntersectionObserver, requestAnimationFrame, header scroll state, and hero parallax.
- [ ] Run `python test_site.py` and confirm the new checks fail before implementation.

### Task 2: Shared CSS motion system
**Files:** Modify `styles.css`
- [ ] Add reveal, image, stagger, hero, hover, header, mobile navigation, and view-transition styles.
- [ ] Add reduced-motion overrides.

### Task 3: Shared JavaScript motion controller
**Files:** Modify `app.js`
- [ ] Register page elements for motion without requiring repeated HTML edits.
- [ ] Observe reveals with IntersectionObserver.
- [ ] Add requestAnimationFrame hero parallax and header scroll state.
- [ ] Respect reduced-motion preference.

### Task 4: Verification and package
**Files:** Verify all site files, create ZIP.
- [ ] Run `python test_site.py`.
- [ ] Scan for syntax issues and motion markers.
- [ ] Package the final project ZIP.
