# Profile Card Generator

A simple and interactive web application that dynamically creates profile cards from user input using HTML, CSS, and JavaScript.

Link : https://fawahkhan.github.io/Project-3-Profile-Card-Generator/ 

## Overview 

This project demonstrates the use of **event listeners** and **DOM manipulation** in vanilla JavaScript. Users can fill out a form with profile information and instantly generate a styled card that displays their data with a profile picture.

## Features

- **Dynamic Form Input**: Users can enter profile information through a clean form interface
- **Real-time Card Generation**: Cards are created instantly upon form submission
- **No Page Reload**: Utilizes `preventDefault()` to prevent form submission from refreshing the page
- **Styled Cards**: Each card displays profile information in an attractive, organized format
- **Auto-clear Form**: Input fields are automatically cleared after card creation for the next entry
- **Responsive Design**: Dark theme with a modern aesthetic

## Project Structure

```
Project 3/
├── index.html      # Main HTML file with form and styling
├── script.js       # JavaScript file handling form submission and DOM manipulation
└── README.md       # Project documentation
```

## How It Works

1. **Form Input**: Users fill in four input fields:
   - Profile Picture URL
   - Name
   - Occupation
   - Information/Bio

2. **Event Listener**: When the form is submitted, a JavaScript event listener captures the submission and prevents the default page reload

3. **DOM Creation**: The script dynamically creates a card element with:
   - A circular profile picture
   - User's name (h3)
   - Occupation title (h5)
   - Bio/Info text (p)

4. **Card Display**: The newly created card is appended to the main container and displayed on the page

5. **Form Reset**: All input fields are cleared, allowing users to create another card

## Technologies Used

- **HTML5**: Semantic markup and form elements
- **CSS3**: Styling with flexbox, border-radius, and dark theme
- **JavaScript (Vanilla)**: Event handling and DOM manipulation

## Key JavaScript Concepts Demonstrated

- Event listeners (`addEventListener`)
- Event prevention (`preventDefault()`)
- DOM element creation (`createElement`)
- Element selection (`querySelector`, `querySelectorAll`)
- Class management (`classList.add`)
- Content insertion (`appendChild`, `textContent`)
- Array iteration (`forEach`)

## Usage

1. Open `index.html` in a web browser
2. Fill in all four input fields with profile information
3. Click the Submit button
4. A new profile card will appear below the form
5. Repeat to create multiple profile cards

## Styling Details

- **Color Scheme**: Dark background (#222) with white text
- **Font**: Cursive font family for elegant appearance
- **Card Style**: Max-width of 200px with rounded corners and subtle borders
- **Profile Picture**: Circular (50% border-radius) with proper image scaling

## Notes

- Profile picture URLs must be valid image links
- The form includes proper spacing and padding for better UX
- Cards are displayed inline-block for multiple cards per row
- The page maintains all cards until manually refreshed

## Future Enhancements

Potential improvements could include:
- Add validation for image URLs
- Delete/edit card functionality
- Local storage persistence
- Export cards as images
- Add more profile fields
