# Live Character Counter

## 📝 Project Overview

This is a **Twitter-style character counter** that dynamically tracks the remaining characters as users type. It's a foundational learning project demonstrating real-time user input handling and DOM manipulation. The counter displays how many characters are left (with a limit of 20 characters), and the counter text turns red when the limit is exceeded, providing instant visual feedback.

**Link** - https://fawahkhan.github.io/Project-5-Live-Character-Counter/

## ✨ Features

- **Real-time Character Counting**: Displays remaining characters as you type
- **Dynamic Limit Feedback**: Counter turns red when you exceed the 20-character limit
- **Clean Dark UI**: Minimal, focused interface with a dark background
- **Responsive Input**: Instant updates with every keystroke

## 🛠️ Concepts Used

### 1. **Event Listeners**
   - *Definition*: Functions that "listen" for specific user actions (like typing) and execute code when those actions occur.
   - *Usage*: `addEventListener("input")` captures every keystroke and triggers the character counting logic.

### 2. **DOM Selection (Document Object Model)**
   - *Definition*: A programming interface that represents the HTML structure of a webpage, allowing JavaScript to access and modify elements.
   - *Usage*: `document.querySelector()` selects the input field and span element to manipulate them programmatically.

### 3. **DOM Manipulation**
   - *Definition*: Dynamically changing the content and styling of HTML elements using JavaScript.
   - *Usage*: Updates `span.textContent` with the remaining character count and modifies `span.style.color` to change the color.

### 4. **String Length Property**
   - *Definition*: The `.length` property returns the number of characters in a string.
   - *Usage*: `inp.value.length` gets the count of typed characters from the input field.

### 5. **Conditional Logic (if/else)**
   - *Definition*: Decision-making statements that execute different code blocks based on whether conditions are true or false.
   - *Usage*: Checks if remaining characters are negative to apply red color styling.

## 📂 File Structure

```
├── index.html    # HTML markup with input field and character counter display
├── script.js     # JavaScript logic for event handling and DOM updates
└── README.md     # Project documentation (this file)
```

## 🚀 How It Works

1. User types text in the input field
2. The `input` event listener detects each keystroke
3. JavaScript calculates remaining characters: `20 - typed_length`
4. The counter updates in real-time
5. Text turns red when characters exceed the limit (left < 0)


## 📌 Technologies Used

- **HTML5**: Semantic markup and form elements
- **CSS3**: Styling and layout (flexbox concepts)
- **JavaScript (ES6)**: Event handling and DOM manipulation 