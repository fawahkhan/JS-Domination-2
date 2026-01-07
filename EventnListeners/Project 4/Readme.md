# Interactive Cursor Tracking Project

## About This Project

I built a small page where a 200×200 red square follows my mouse around the screen. When I hover over the square, it turns yellow; when I move away, it goes back to red. This was a quick practice project to get more comfortable with DOM events, positions, and a bit of animation.

---

## What It Does (in short)

- Follows the cursor using the window's `mousemove` event
- Changes color on `mouseover` and `mouseout`
- Moves smoothly thanks to a CSS transition with a cubic‑bezier timing function
- Stays positioned using `position: absolute` on a full‑viewport layout

**Link** - https://fawahkhan.github.io/Project-4-Interactive-Cursor-Tracker/

---

## What I Practiced / Figured Out

- Selecting elements with `document.querySelector()` and updating styles via JS
- Reading mouse coordinates from the event (`clientX`, `clientY`) and mapping them to `top`/`left`
- Why absolute positioning is needed for setting `top`/`left` directly
- Using transitions to make movement feel less janky
- Updating element text with `textContent` to reflect the current state

---

## Concepts I Used

### JavaScript Concepts

- **Event Listeners** - A mechanism that waits for and responds to specific user interactions (like mouse movement or hovering) on DOM elements.
- **DOM Manipulation** - The process of accessing and modifying HTML elements and their properties programmatically through JavaScript.
- **Event Object** - An object containing detailed information about an event, including properties like `clientX` and `clientY` for mouse position coordinates.

### CSS Concepts

- **CSS Transitions** - Smooth animations that gradually change CSS properties from one value to another over a specified duration.
- **Cubic-Bezier Timing Function** - A mathematical curve that defines the speed and acceleration of an animation, creating natural-looking motion effects.
- **Absolute Positioning** - A CSS positioning method that removes an element from normal document flow and positions it relative to its nearest positioned ancestor or the viewport.
- **Box Model** - The concept that every HTML element is composed of content, padding, border, and margin, controlled by the `box-sizing` property.

### HTML Concepts

- **Semantic HTML** - Using proper HTML structure with DOCTYPE declarations and meta tags for better browser compatibility and accessibility.
- **Viewport Meta Tag** - An HTML meta tag that ensures responsive design works correctly across different device screen sizes.

---

## 🚀 Features

✨ **Real-time Cursor Tracking** - The square follows your mouse position with smooth transitions  
✨ **Interactive Hover State** - Color changes (red ↔ yellow) on mouse enter/exit  
✨ **Smooth Animations** - Cubic-bezier easing for polished motion effects  
✨ **Responsive Design** - Adapts to different screen sizes  
✨ **Clean Code** - Well-structured JavaScript with clear event handling  

---

## 📁 File Structure

```
Project 4/
├── index.html      # Main HTML file with styling
├── script.js       # JavaScript event handlers and DOM manipulation
└── Readme.md       # Project documentation
```

---

## 🔧 How It Works

### Event Listeners Used:

1. **`mouseover`** - Triggers when the cursor enters the square, changing its color to yellow
2. **`mouseout`** - Triggers when the cursor leaves the square, changing it back to red
3. **`mousemove`** - Triggers continuously as the cursor moves, updating the square's position to match the cursor coordinates

### Key JavaScript Implementation:

```javascript
// Selects the square element
let abcd = document.querySelector("#abcd")

// Changes color on hover
abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow"
})

// Resets color when mouse leaves
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red"
})

// Tracks cursor and moves square accordingly
window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px"
    abcd.style.left = dets.clientX + "px"
})
```

---

## 📚 Learning Outcomes

This project teaches:

- How to select and manipulate DOM elements with JavaScript
- How to listen and respond to user events
- Understanding coordinate systems in web browsers
- CSS positioning and transitions
- How inline styles override CSS and affect element rendering
- The importance of absolute positioning for dynamic element placement

---

## 💬 Code Comments

The JavaScript file includes helpful comments in multiple languages to explain the logic, making it great for learning and understanding each step of the implementation.

---
