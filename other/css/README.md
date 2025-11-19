# CSS FOR FRONTEND INTERVIEWS (NORMAL TO ADVANCED)

table of contents

- [SECTION 1: BASIC CSS CONCEPTS](#section-1-basic-css-concepts)
- [SECTION 2: INTERMEDIATE CSS](#section-2-intermediate-css)
- [SECTION 3: ADVANCED CSS CONCEPTS](#section-3-advanced-css-concepts)
- [SECTION 4: UI/UX RELATED CSS](#section-4-uiux-related-css)
- [SECTION 5: PERFORMANCE AND OPTIMIZATION](#section-5-performance-and-optimization)
- [SECTION 6: ARCHITECTURE & SCALING CSS](#section-6-architecture--scaling-css)
- [SECTION 7: MOST ASKED CSS INTERVIEW QUESTIONS](#section-7-most-asked-css-interview-questions)
- [SECTION 8: SUPER ADVANCED CSS (ASKED IN GOOD COMPANIES)](#section-8-super-advanced-css-asked-in-good-companies)

<br>
<br>

## SECTION 1: BASIC CSS CONCEPTS

1. CSS Selectors

   Types of selectors every frontend developer must know:

   - Element selector (h1, p)
   - Class selector (.title)
   - ID selector (#main)
   - Universal selector (\*)
   - Group selector (h1, h2, h3)
   - Child selector (parent > child)
   - Descendant selector (parent child)
   - Adjacent sibling selector (a + b)
   - General sibling selector (a ~ b)

2. CSS Colors

   color formats: hex, rgb, rgba, hsl, hsla.

3. CSS Units

   - Absolute: px
   - Relative: %, em, rem, vw, vh, vmin, vmax.
   - Important notes:
   - em relative to parent, rem relative to root.
   - vw/vh relative to viewport.

4. Box Model

   - Components: content → padding → border → margin.
   - box-sizing:
   - content-box (default)
   - border-box (preferred in modern layouts)

5. Display Property
   - block: takes full width
   - inline: content-width only
   - inline-block: inline but supports width/height
   - none: removed from layout
   - flex: flex container
   - grid: grid container

## SECTION 2: INTERMEDIATE CSS

1. Flexbox

   Important properties:

   - `display: flex`
   - `flex-direction: row or column`
   - `justify-content: position children horizontally`
   - `align-items: vertical alignment`
   - `flex-wrap`
   - `gap`
   - `align-self`
   - `flex-grow`, `flex-shrink`, `flex-basis`

2. CSS Grid

   Two-dimensional layout. Properties:

   - grid-template-columns
   - grid-template-rows
   - grid-gap or gap
   - grid-column
   - grid-row
   - repeat(), auto-fit, auto-fill

3. Position Property

   - `static`
   - `relative`
   - `absolute`
   - `fixed`
   - `sticky`
   - `z-index` for stacking order.

4. Overflow

   - `hidden`, `auto`, `scroll`, `visible`.
   - Scrolling containers use overflow: auto or scroll.

5. Float (Legacy but sometimes asked)

   - Used to float images or layouts before flex/grid.

6. Pseudo-classes

   - `:hover`
   - `:active`
   - `:focus`
   - `:nth-child()`
   - `:first-child`
   - `:last-child`
   - `:not()`

7. Pseudo-elements

   Used for decorations, icons, backgrounds.

8. Typography

   - `font-family`
   - `font-size`
   - `font-weight`
   - `line-height`
   - `letter-spacing`
   - `text-align`
   - `text-decoration`

9. Transitions

   - `transition-property`
   - `transition-duration`
   - `transition-timing-function`
   - `transition-delay`

   Used for smooth animations.

10. Transforms - translate - scale - rotate - skew
    Used to move or scale elements.

## SECTION 3: ADVANCED CSS CONCEPTS

1. Responsive Design

   - media queries
   - min-width, max-width
   - mobile-first vs desktop-first
   - container queries (new standard)
   - responsiveness using flex, grid, vw/vh units.

2. CSS Variables (Custom Properties)

   Defined using:

   - `--primary-color`
   - Access using: var(`--primary-color`)
   - Scope depends on where variable is defined.

3. Specificity

   Hierarchy:

   - inline styles > IDs > classes > elements
   - Adding !important overrides all but should be avoided.
   - Specificity formula: INLINE – ID – CLASS – ELEMENT.

4. Cascade Layers (CSS @layer)

   - Helps organize and control CSS hierarchy more clearly.
   - Used in modern CSS scaling.

5. Inheritance

   - Some properties inherit automatically (font, color).
   - Layouts (width, margin) do not inherit.

6. CSS Functions

   - `calc()`
   - `min()`, `max()`, `clamp()`
   - `var()`
   - `rgba()`
   - `hsl()`
   - `fit-content()`

7. Animation (Keyframes)

   - @keyframes defines animations.
   - Properties: animation-name, duration, iteration-count, direction, fill-mode.

8. Filters

   - blur
   - brightness
   - contrast
   - drop-shadow
   - grayscale
   - Used in UI effects and images.

9. Backdrop-filter

   Used to create glass effect (frosted glass UI).

10. CSS Logical Properties
    - margin-inline
    - padding-block
    - border-start
    - Useful for multi-language text layouts.

## SECTION 4: UI/UX RELATED CSS

1. Shadows

   - `box-shadow`
   - `text-shadow`
   - `Spread`, `blur`, `inset` types.

2. Gradients

   - `linear-gradient`
   - `radial-gradient`
   - `conic-gradient`

   Used in modern UI backgrounds.

3. Aspect Ratio

   - aspect-ratio: 16/9
   - Useful for video, images, consistent cards.

4. Object-fit and object-position

   Useful for responsive images and videos.

5. Clip-path

   Used for curved shapes, custom shapes.

6. Masking
   - `mask-image`, `mask-size`
   - Advanced UI effects.

## SECTION 5: PERFORMANCE AND OPTIMIZATION

1. Avoid expensive selectors

   Example: using \* everywhere slows performance.

2. Prefer shorthand properties

   `margin: 10px 20px` instead of multiple lines.

3. Use `“will-change”` carefully

   Improves animation performance but consumes memory.

4. Use transform instead of top/left for animations

   transform does not trigger layout or repaint, only compositing.

5. Minimize repaints and reflows

   Avoid large DOM, avoid layout thrashing.

## SECTION 6: ARCHITECTURE & SCALING CSS

1. BEM Naming Convention

   - Block
   - Element
   - Modifier
   - Example: card\_\_title--large
   - Helps maintain large codebases.

2. Utility-first CSS

   - Used in Tailwind.
   - Speeds development using small atomic classes.

3. CSS Modules

   - Locally scoped CSS used in React, Next.js.

4. Styled Components

   - CSS-in-JS library for React.

5. Scoping

- Avoid global leaks using `module-based` CSS or naming systems.

## SECTION 7: MOST ASKED CSS INTERVIEW QUESTIONS

1. What is specificity and how does it work?

   - Explain the priority system: inline > id > class > element.

2. Difference between flex and grid?

   - Flex is one-dimensional (row OR column).
   - Grid is two-dimensional (rows AND columns).

3. Difference between absolute and relative position?

   - `relative`: keeps original space, offsets based on itself.
   - `absolute`: removed from flow, positioned relative to nearest positioned ancestor.

4. What is the box model?

   - element = `content` + `padding` + `border` + `margin`.

5. What is `z-index` and `stacking context`?

   - `z-index works` only on positioned elements.
   - `Stacking context` created by transform, opacity, etc.

6. How do media queries work?

   - Used to apply CSS based on screen size.

7. What is the difference between em and rem?

- `em` = parent
- `rem` = root (html element)

8. What is the difference between transition and animation?

   - Transition needs a trigger, animation runs automatically or loops.

9. What is “repaint” and “reflow”?

   - `Reflow` = layout change (expensive)
   - `Repaint` = visual change without layout change.

10. How do you center a div?

    Common methods:

    - `flexbox`: justify-content + align-items
    - `grid`: place-items: center
    - `margin` auto with set width (older method)

11. What is the difference between inline-block and block?

    - inline-block supports width/height but stays inline.

12. What is the stacking context?
    - A new layer of stacking order created by elements with position + z-index or by opacity, transform.

## SECTION 8: SUPER ADVANCED CSS (ASKED IN GOOD COMPANIES)

1. Container Queries

   - Allows styling based on parent size, not viewport.

2. CSS Nesting

   - Native support similar to SCSS nesting.

3. Subgrid

   - Enables children to inherit grid from parent.

4. Scroll-driven animations

   - `@scroll-timeline` for `scroll-based` animations.

5. prefers-color-scheme

   - Automatic dark mode detection.

6. View transitions API

   - Smooth page transitions (Next.js uses it internally).

7. `Houdini CSS`
   - Allows developers to extend CSS with custom painting and layout logic.
