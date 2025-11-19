# HTML FOR FRONTEND INTERVIEWS (NORMAL TO ADVANCED)

table of contents

- [SECTION 1: BASIC TO INTERMEDIATE HTML](#section-1-basic-to-intermediate-html)
- [SECTION 2: ADVANCED HTML CONCEPTS](#section-2-advanced-html-concepts)
- [SECTION 3: BROWSER & INTERNAL HTML KNOWLEDGE](#section-3-browser--internal-html-knowledge) -[SECTION 4: MOST COMMON HTML INTERVIEW QUESTIONS](#section-4-most-common-html-interview-questions)
- [SECTION 5: SUPER ADVANCED TOPICS (ASKED IN SENIOR OR SERIOUS INTERVIEWS)](#section-5-super-advanced-topics-asked-in-senior-or-serious-interviews)

<br>
<br>

## SECTION 1: BASIC TO INTERMEDIATE HTML

1. Semantic HTML
   Common semantic tags: header, nav, main, section, article, aside, footer.
   Why semantic HTML?

   - Improves SEO
   - Better accessibility for screen readers
   - Cleaner code
   - Helps browsers and crawlers understand structure

2. Forms and Input Types

   - Important input types: text, email, number, date, file, range, checkbox, radio, password, color.
     Important attributes: required, pattern, min, max, step, readonly, disabled, placeholder, autocomplete.
     Button types: submit (submits form), button (does nothing by default), reset (resets form).

3. Media tags

   - img, video, audio.
     img must have alt for accessibility and SEO.
     video needs controls for playback.

4. Links and navigation
   - a tag: supports href, target (\_blank), download, rel="noopener noreferrer" for safety.

## SECTION 2: ADVANCED HTML CONCEPTS

1. Accessibility (A11y)
   ARIA attributes:

   - aria-label (provides hidden label)
   - aria-expanded (true/false for dropdowns)
   - aria-hidden (hide from screen readers)
   - aria-controls (indicates controlled element)

role attribute: helps describe purpose (button, alert, navigation, banner).
Keyboard accessibility: tabindex=0 makes element focusable.

2.  SEO in HTML

    - Important meta tags: description, keywords, author, viewport.
      Viewport meta tag: width=device-width, initial-scale=1.0 (important for responsive design).
      Robots meta tag controls indexing.
      Open Graph meta tags control social sharing previews.

3.  HTML Performance Techniques

    - Use defer on script (executes after HTML parsing).
    - Use async for independent scripts.
    - Preload important assets with link rel=preload.
    - Prefetch future resources with link rel=prefetch.
    - Use loading="lazy" for images and iframes.
    - Minimize DOM size.
    - Use responsive images to avoid downloading large unnecessary files.

4.  Custom Data Attributes

    - data-\* attributes allow you to store custom data on HTML elements.
      Used in JavaScript-heavy apps or for tracking states.
      Example: data-id, data-theme, data-user-role.

5.  Security-Related HTML Practices

    - To prevent XSS, avoid injecting raw HTML strings.
      Use meta tags like X-Content-Type-Options = nosniff.
      Use Content-Security-Policy to restrict sources of scripts and images.
      Use rel="noopener noreferrer" for external links.

6.  Web Components

    Web Components include:

    - Custom Elements
    - Shadow DOM
    - HTML Templates

    Shadow DOM: encapsulates markup and styles.
    Custom Element: a new HTML tag defined by you.
    Template tag: holds HTML that is inactive until cloned.

7.  HTML Template & Slot System

    - Templates store fragments reused in dynamic apps.
    - Slots allow customizable content inside Web Components.

8.  Responsive Images Techniques

    - Picture element allows switching images based on viewport or device pixel ratio.
    - srcset gives the browser multiple resolution options.
    - sizes attribute helps browser choose correct source.

9.  HTML Entities

    Used to display reserved characters:
    ` < , > , & , © ,`

10. Forms (Advanced)

    - inputmode attribute controls onscreen keyboards on mobile.
      - autocapitalize="off"
      - spellcheck="false"
      - autocomplete fields must follow standard naming like "email", "name", "street-address".

## SECTION 3: BROWSER & INTERNAL HTML KNOWLEDGE

1. How Browser Rendering Works

   - HTML parsed → DOM tree
   - CSS parsed → CSSOM tree
   - DOM + CSSOM → Render Tree
   - Layout → Paint → Composite

   Blocking resources:

   - render-blocking CSS
   - synchronous JavaScript
     Critical Rendering Path optimization uses defer, async, preload.

2. Shadow DOM vs regular DOM

   Shadow DOM: isolated styling, not affected by global CSS.
   Used in Web Components, e.g., browsers’ native elements like input and video.

3. DOM vs Virtual DOM

   DOM = browser document model
   Virtual DOM = JS representation used by React
   Not directly HTML, but often asked.

4. HTML Collections vs NodeLists

   HTMLCollection: live updates

   NodeList: static unless querySelectorAll

## SECTION 4: MOST COMMON HTML INTERVIEW QUESTIONS

1. What is DOCTYPE and why is it important?

   - It tells the browser to use HTML5 rendering mode.

2. Difference between block, inline, and inline-block elements?

   - Block takes full width, inline takes only content width, inline-block is inline but supports width/height.

3. What is semantic HTML?

   - Tags that describe meaning: header, nav, article, aside, footer, main.

4. What is accessibility in HTML?

   - Making web usable for people with disabilities using semantic tags, ARIA attributes, keyboard navigation.

5. Difference between async and defer in script?

   - async loads script while parsing and executes immediately.
     defer loads script while parsing but executes after parsing ends.

6. Why put scripts at bottom or use defer?

   - To prevent blocking the HTML rendering.

7. Why is alt attribute required for images?

   - Accessibility + SEO + image fallback.

8. What is the difference between id and class?

   - id is unique, class is reusable.

9. Explain crossorigin attribute.

   - Used for CORS with images, fonts, scripts.

10. What is Critical Rendering Path?

    - Steps browser takes to convert HTML/CSS/JS into pixels.

11. Difference between localStorage, sessionStorage, and cookies?

    - localStorage: permanent until deleted (5–10 MB)
    - sessionStorage: per-tab lifetime
    - cookies: sent to server, small (4 KB), expire manually

12. What is preloading?

    - Forces browser to download resource early.

13. What is the purpose of meta viewport?

    - Controls responsive behavior on mobile.

14. What is the difference between `<link rel="preload">` and` <link rel="prefetch">`?

    - preload = needed now
    - prefetch = needed in future pages

15. Explain event delegation in HTML/JS context.
    - Use one parent to handle events from multiple children.

## SECTION 5: SUPER ADVANCED TOPICS (ASKED IN SENIOR OR SERIOUS INTERVIEWS)

1. Content-Security-Policy (CSP)

   - Prevents XSS by controlling what resources can run.

2. Sandbox attribute on iframes

   - iframe sandbox prevents scripts or navigation unless allowed.

3. Web Manifest & PWA-specific HTML

   - manifest.json linked using link rel=manifest.

4. Service Worker registration happens in HTML via script.

   - Makes site offline-capable.

5. HTML parsing optimization

   - Avoid: nested tables, deep DOM trees, excessive inline styles, too many DOM nodes.

6. Inert attribute

   - Prevents user interaction on sections of the page.

7. popover attribute
   - Native HTML popover API; no JS needed for tooltips/popups.
