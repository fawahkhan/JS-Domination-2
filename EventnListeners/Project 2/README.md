## File Upload Button — quick concept brush-up

I built this tiny page to refresh my DOM/event basics. The idea is simple: hide the native file input, show my own button, and still use the browser's picker.

### What it does
- Shows a custom Upload File button in the center of the page.
- Keeps the real `<input type="file">` hidden but clickable via JS.
- Swaps the button text with the chosen file name after selection.

### How it works
- On click, the button calls `input.click()` to open the native picker.
- On `change`, the selected file name replaces the button label.
- Minimal CSS for a pill button, hover state, and centered layout.

### Files
- index.html — markup plus a few inline styles.
- script.js — the two event listeners that wire everything up.

### Run it 
Click here - https://fawahkhan.github.io/Project-2-DOM-and-EventListeners/
OR
Open index.html in your browser, hit the button, pick a file, and watch the label update.

### Why
Just brushing up core JS (no frameworks) and playing with custom file inputs. Everything stays on your machine.
