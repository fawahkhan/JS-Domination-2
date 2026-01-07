# Delegated Event Handler - Todo List Project

## 📋 Project Overview

This is a beginner-friendly learning project that demonstrates the practical application of **event bubbling** and **delegated event handlers** in JavaScript. The project implements a simple interactive list where items can be toggled with a strikethrough effect by clicking on them. Instead of attaching individual event listeners to each list item (which is inefficient), the project uses a single event listener on the parent `<ul>` element that handles all clicks on child `<li>` elements.

## 🎯 What Does This Project Do?

The application displays a fruit list with the following interactive functionality:
- Click on any fruit name to toggle a strikethrough effect
- Click again to remove the strikethrough effect
- Simple, responsive, and visually clean UI with a dark theme

**Link** - https://fawahkhan.github.io/Project-6-Delegated-Event-Handler-Todo-List/

## 📚 Key Concepts Explained

### 1. **Event Bubbling**
    A phenomenon where an event triggered on a child element automatically propagates upward through its parent elements in the DOM tree.
   - **In this project**: When you click on a `<li>` element, the click event bubbles up to the `<ul>` parent, where our event listener is attached, allowing us to detect and handle the click.

### 2. **Delegated Event Handler**
    A design pattern where a single event listener is attached to a parent element to manage events for all its current and future child elements, rather than attaching listeners to each child individually.
   - **In this project**: Instead of creating 5 separate event listeners (one for each fruit), we attach just 1 listener to the `<ul>` element. This is more efficient, cleaner, and automatically handles newly added items.

### 3. **Event Target (dets.target)**
    A property that identifies the exact element that triggered the event, allowing us to know which element the user interacted with.
   - **In this project**: `dets.target` tells us which `<li>` item was clicked so we can apply the strikethrough effect specifically to that item.

### 4. **classList.toggle()**
    A DOM method that adds a CSS class to an element if it doesn't exist, or removes it if it does exist, making it perfect for toggling styles.
   - **In this project**: `classList.toggle("lt")` adds or removes the `.lt` class (which has `text-decoration: line-through`) to toggle the strikethrough effect on click.

## 🛠️ How It Works

1. **HTML Structure**: A simple unordered list (`<ul>`) containing 5 fruit items (`<li>`)
2. **Event Listener**: Attached to the `<ul>` element, listening for "click" events
3. **Event Handling**: When any `<li>` is clicked:
   - The click event bubbles up to the `<ul>`
   - Our listener catches the event
   - We identify the clicked item using `event.target`
   - We toggle the `.lt` CSS class on that item
4. **Visual Feedback**: The `.lt` class applies strikethrough styling via CSS

## 💡 Why This Approach is Better

- **Efficiency**: 1 event listener instead of 5 = better performance
- **Scalability**: Adding new items automatically works without creating new listeners
- **Maintainability**: Centralized event handling logic is easier to modify
- **Memory**: Reduced memory footprint with fewer listeners

## ⚠️ Important: Event Bubbling Caveat

Event bubbling can cause unintended behavior if parent elements also have event listeners. The event will trigger listeners on ALL ancestor elements, potentially executing multiple handlers. In this project, we avoid this issue by using a leaf element (the list items) and having only the parent listener.