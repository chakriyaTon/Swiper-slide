# Hero Slider

A lightweight, responsive hero image slider built with pure HTML, CSS, and JavaScript — no frameworks required.

## Features

- Auto-advancing slides with configurable delay
- Animated progress ring countdown
- Smooth fade transitions with staggered text animations
- Navigation arrows + clickable dot indicators
- Touch & mouse drag support (swipe left/right)
- Keyboard navigation (← →)
- Pause on hover
- Fully responsive (mobile-friendly)
- Zero dependencies — no jQuery, no libraries

## Preview

> Open `index.html` in any browser to see it in action.

## Project Structure

```
hero-slider/
├── index.html   — markup & slide content
├── style.css    — all styles & animations
├── script.js    — slider logic
└── README.md
```

## How to Customize

### Change slide images
In `index.html`, replace the `src` attribute on each `<img>` tag:

```html
<img src="YOUR_IMAGE_URL_HERE" alt="Slide 1">
```

### Change slide text
Edit the `.tt` (title) and `.td` (description) divs inside each slide:

```html
<div class="tt">Your Title Here</div>
<div class="td">Your description here</div>
```

### Add or remove slides
Copy a slide block and paste it. The counter labels (`.tc`) are static text — update them manually to match your total, e.g. `01 / 04`.

### Change auto-advance speed
In `script.js`, edit the `DELAY` value (milliseconds):

```js
var DELAY = 4500; // 4.5 seconds
```

### Change slider height
In `style.css`:

```css
#hs4 { height: 550px; }
```

## Usage in Elementor (WordPress)

This slider was originally designed for Elementor's **HTML widget**. To use it there:
1. Copy the full contents of all files back into a single HTML widget.
2. Wrap the `<style>` block inside `<style>` tags and `<script>` inside `<script>` tags as usual.

## License

MIT — free to use and modify.

## Author

**Chakriya** — WordPress Developer & IT Student
