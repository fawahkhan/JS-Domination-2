## JavaScript Projects — Learning Exercises & Mini-builds

A collection of vanilla JavaScript mini-projects built to practice and master core concepts. Each one lives in its own folder and runs by simply opening `index.html`.

### Projects
- **Project 1 · Basic Keydown Playground** — Mirrors any pressed key into a giant heading; handles the space bar gracefully.
- **Project 2 · File Upload Button** — Hides the native file input behind a custom button and swaps its label with the chosen file name.
- **Project 3 · Profile Card Generator** — Captures form input and instantly renders styled profile cards without page reloads.
- **Project 4 · Interactive Cursor Tracker** — A red square follows your mouse around the screen; turns yellow on hover using mouse events and smooth CSS transitions.
- **Project 5 · Live Character Counter** — A Twitter-style character counter that displays remaining characters and turns red when exceeding the 20-character limit.
- **Project 6 · Delegated Event Handler Todo List** — A fruit list where items toggle strikethrough on click, demonstrating event delegation and event bubbling.
- **Project 7 · Email + Password Validator** — A login form that validates email format and strong passwords using regex, with inline error messages.
- **Project 8 · Downloader Progress Bar** — A glassmorphism card with an animated gradient bar that fills to 100% over 3 seconds using `setInterval`.
- **Project 9 · Theme Preference Setter** — Light/dark toggle that respects OS theme preference and remembers user overrides with `localStorage`.

### Run locally
1) Clone/download this repo. 2) Open any project folder. 3) Double-click `index.html` (no builds or deps).

### Live previews
- Project 1: https://fawahkhan.github.io/Project-1-EventHandlers/
- Project 2: https://fawahkhan.github.io/Project-2-DOM-and-EventListeners/
- Project 3: https://fawahkhan.github.io/Project-3-Profile-Card-Generator/
- Project 4: https://fawahkhan.github.io/Project-4-Interactive-Cursor-Tracker/
- Project 5: https://fawahkhan.github.io/Project-5-Live-Character-Counter/
- Project 6: https://fawahkhan.github.io/Project-6-Delegated-Event-Handler-Todo-List/
- Project 7: https://fawahkhan.github.io/Project-7-Email-Password-Validator/
- Project 8: https://fawahkhan.github.io/Project-8-Downloader-ProgressBar/
- Project 9: https://fawahkhan.github.io/Project-9-Theme-Preference-Setter/

Note: These were built to get my hands dirty with JS; HTML/CSS is intentionally minimal. I'll polish the visuals once the core JS essentials are solid.

### What I learned

**DOM Manipulation**
- Selecting elements with `querySelector()`, `querySelectorAll()`, `getElementById()`
- Modifying content with `textContent` and `innerHTML`
- Creating and removing elements dynamically with `createElement()` and `remove()`
- Updating inline styles and attributes with `style` and `setAttribute()`
- Working with classes via `classList.add()`, `classList.remove()`, `classList.toggle()`
- Traversing and manipulating the DOM tree

**Event Listeners & Event Handling**
- Attaching listeners with `addEventListener()` for various events: `click`, `dblclick`, `input`, `change`, `submit`, `keydown`, `mouseover`, `mouseout`, `mousemove`
- Understanding event objects and accessing target properties
- Using `preventDefault()` to stop default form submissions
- Removing listeners with `removeEventListener()`

**Event Bubbling & Delegation**
- How events propagate up the DOM tree
- Implementing efficient event delegation by listening on parent elements
- Using delegated handlers to manage multiple child elements with a single listener

**Mouse Events & Coordinate Tracking**
- Capturing mouse position with `clientX` and `clientY`
- Creating interactive effects based on mouse movement
- Changing element appearance with hover states (`mouseover`, `mouseout`)

**Keyboard Events**
- Handling `keydown` events and accessing key information
- Special handling for keys like spacebar using `dets.key`

**Form Handling & Validation**
- Working with form elements and input fields
- Using regex patterns for email and password validation
- Displaying error messages and validation states
- Resetting form inputs after submission
- Building valid/invalid states with boolean flags

**Regular Expressions (Regex)**
- Creating regex patterns for email validation
- Validating strong passwords with multiple conditions (uppercase, lowercase, numbers, special chars, length)
- Using `.test()` method to check if values match patterns

**Timers & Intervals**
- Using `setInterval()` to create repeating actions
- Using `clearInterval()` to stop timers
- Calculating step intervals for smooth animations
- Creating progress bars and countdown effects

**Local Storage & Persistence**
- Reading from `localStorage` with `getItem()`
- Writing to `localStorage` with `setItem()`
- Persisting user preferences across page reloads
- Building state that survives browser restarts

**System Preferences & Responsive Design**
- Using `matchMedia()` to detect OS theme preference with `prefers-color-scheme`
- Listening for changes in system preferences with `addEventListener()` on media queries
- Respecting user overrides while honoring system defaults

**Data Handling**
- Accessing form input values with `.value`
- Working with file uploads via `files[0]`
- Manipulating data from multiple inputs into structured output
- Clearing input values after processing

### What's next
- More event-driven mini-builds as I learn new things.