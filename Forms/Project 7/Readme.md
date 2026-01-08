# Email + Password Validator

A small login form that checks email format and a strong-ish password with regex. Kept it plain so I remember the basics.

**link** - https://fawahkhan.github.io/Project-7-Email-Password-Validator/

## What it does
- Shows a two-field form (email + password) with inline error text.
- On submit, stops the page reload and runs two regex checks.
- If either fails, shows the error message; if both pass, shows a simple "Submitted" note.

## How it works
1. Grab inputs and error placeholders with `querySelector`.
2. Listen for `submit`, call `preventDefault()` to keep the page in place.
3. Test values with an email regex and a password regex (upper, lower, number, special, 8+ chars).
4. Toggle error text visibility; when both are valid, update the result message to success.

## Files
- [Forms/Project 7/index.html](Forms/Project%207/index.html) — form markup and error placeholders.
- [Forms/Project 7/style.css](Forms/Project%207/style.css) — simple card layout and input states.
- [Forms/Project 7/script.js](Forms/Project%207/script.js) — submit handler and regex checks.

## JS concepts practiced
- `addEventListener('submit', ...)` with `preventDefault()`
- Regex `.test()` for validation rules
- DOM selection and small inline style/text tweaks
- Using a boolean flag to track overall validity