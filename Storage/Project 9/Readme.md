## Theme Preference Setter

Light/dark toggle that honors the OS preference by default and remembers user overrides.

**link** - https://fawahkhan.github.io/Project-9-Theme-Preference-Setter/

**How it works**
- Reads the system theme via `matchMedia('(prefers-color-scheme: dark)')`.
- Button flips the `body` class (light/dark) and saves the choice in `localStorage`.
- Reacts to OS theme changes only when no saved override exists.

**Use it**
- Open [index.html](index.html) and click the toggle.

**Files**
- [index.html](index.html)
- [script.js](script.js)
- [style.css](style.css)

**JS topics used**
- `matchMedia` with `prefers-color-scheme` to read OS theme and listen for changes.
- `classList` toggling on `body` for theme application.
- `localStorage` read/write for persisting the override.

**Nice-to-haves**
- Toggle text that describes the next action.
- Expand theme tokens (spacing, component styles) if the project grows.

**Learnings**
- Respect system defaults first, then layer user intent.
- Keep theme state centralized via classes instead of scattered style toggles.
- Persisting simple state in `localStorage` keeps behavior consistent across reloads.
