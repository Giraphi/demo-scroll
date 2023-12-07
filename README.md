# Demo: Scroll into Text

-   Stack: vite + react.
-   Run with `npm run dev`

## Design Idea

The design idea is based on similar animations that have been used by
<a href="www.apple.com/">apple.com</a> in the past on various product pages.

## Implementation

This implementation uses <a href="https://www.framer.com/motion/">framer-motion</a>
&rsquo;s <a href="https://www.framer.com/motion/use-scroll/">useScroll()</a> to detect the
user&rsquo;s scroll progress.
and adjusts opacity and zoom of the overlay accordingly. Transparency of the text is
achieved with css
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode">
mix-blend-mode: multiply
</a>
. Layout is build around
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">position: sticky</a>.
