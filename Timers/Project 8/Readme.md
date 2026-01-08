# Downloader Progress Bar

A quick timer practice: a glassy card shows a download label, fills a blue gradient bar to 100%, and flips the text to "Downloaded" when done. All vanilla HTML/CSS/JS.

**Link** -https://fawahkhan.github.io/Project-8-Downloader-ProgressBar/

## What this does
- Shows a glassmorphism-style card centered on the page with a "Downloading..." heading.
- Animates a gradient bar from 0–100% over ~3 seconds using a `setInterval` tick of 30 ms.
- Updates the numeric percent text each tick; when it finishes, the heading switches to "Downloaded" and the interval is cleared.
- No external libraries, no build step—just open the page.

## How it works
1. Select the bar (`.progress-bar`) and the text container (`#percentText`).
2. Start `setInterval` with a 30 ms delay (`3000 / 100`).
3. On each tick, increment `count`, set the bar width to `${count}%`, and mirror the number in the percent text.
4. Once `count` passes 99, change the heading to "Downloaded" and call `clearInterval` to stop the timer.

## Files
- [Timers/Project 8/index.html](Timers/Project%208/index.html) — markup and container layout.
- [Timers/Project 8/style.css](Timers/Project%208/style.css) — gradient background and glass card styling.
- [Timers/Project 8/script.js](Timers/Project%208/script.js) — interval logic that drives the bar and label.

## Run it
Open [Timers/Project 8/index.html](Timers/Project%208/index.html) in your browser. No bundlers or npm needed.

## Concepts practiced
- `setInterval` vs. `clearInterval` for timed updates.
- Updating inline styles for smooth width animation.
- Basic timer math for mapping duration to percent steps.
