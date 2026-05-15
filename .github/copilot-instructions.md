# Copilot Instructions for todo-app

## Repository Overview

**Type:** Vanilla JavaScript web application (no build tools, no package manager, no CI/CD)

**Description:** A simple, client-side todo list application featuring:
- Add and delete todo items
- Mark todos as completed by clicking on them
- Dark/light theme toggle with localStorage persistence
- No external dependencies or backend

**Language Composition:**
- CSS: 51.6%
- JavaScript: 34.9%
- HTML: 13.5%

**Repository Size:** 6 KB (very small repository)

**Key Characteristics:**
- Static HTML/CSS/JavaScript - runs entirely in the browser
- No npm, no build process, no transpilation, no deployment pipeline
- No CI/CD workflows or GitHub Actions
- Default branch: `master`
- No runtime dependencies to install
- No tests or test framework

## Project Layout

```
todo-app/
├── index.html       (Main HTML file - app structure and DOM)
├── script.js        (JavaScript logic - form, todo management, theme toggle)
├── styles.css       (Styling - light and dark theme with CSS variables)
└── .github/
    └── copilot-instructions.md (This file)
```

### Key Files and Responsibilities

**index.html** - Application entry point
- Contains the main app container with header
- Defines form for todo input with id="todo-form" and id="todo-input"
- Contains unordered list with id="todo-list" where todos are rendered
- Includes theme toggle button with id="theme-toggle"
- Loads script.js at end of body

**script.js** - Core application logic
- DOM element references (todoForm, todoInput, todoList, themeToggle)
- Theme initialization and switching logic (localStorage key: 'theme')
- Form submission handler for adding todos
- Click handlers for deleting and marking todos as completed
- No external libraries or build steps required

**styles.css** - Complete styling with theme support
- CSS custom properties (variables) for light and dark themes
- Root theme colors defined for both `body` and `html.dark-theme`
- Flexbox/grid layouts for responsive design
- All styling is self-contained; no CSS preprocessor (SCSS/LESS)

## How to Work with This Repository

### File Modifications
Since this is a static file repository with no build tools:
1. Modify HTML directly in `index.html`
2. Modify JavaScript directly in `script.js`
3. Modify CSS directly in `styles.css`
4. **No compilation, transpilation, or build steps required**

### Testing Changes Locally
To verify changes work correctly:
1. Open `index.html` directly in a web browser (file:// protocol works fine)
2. Use browser DevTools to check console for any errors
3. Test theme toggle by clicking the emoji button in the header
4. Test todo functionality: add items, click to complete, delete items
5. Refresh the page and verify localStorage persistence (theme and potentially todos if implementation is added)

### Important Notes
- All code runs in the browser - there are no server-side components
- LocalStorage API is used for theme persistence (key: `'theme'` with values `'dark'` or `'light'`)
- No validation pipeline or linting tools are configured
- Changes take effect immediately when files are saved and browser is refreshed
- DOM event listeners are attached by ID, so ensure `index.html` ID attributes match the selectors in `script.js`

### Common Patterns in the Code
- **Theme Toggle:** Uses `document.documentElement.classList.toggle('dark-theme')` to switch themes
- **Todo Creation:** Uses `document.createElement()` and `.appendChild()` to dynamically add items
- **Event Handling:** Uses `.addEventListener()` for form submission, click events on todos and buttons
- **CSS Variables:** Theme colors are defined as `--color-name` and referenced with `var(--color-name)`

## Trust These Instructions
This repository is straightforward and does not require exploration with grep, find, or code search tools to understand the build process or validation steps. Trust the information in this document - there are no hidden build scripts, configuration files, or CI/CD pipelines. Simply modify the three source files directly and test by opening the HTML in a browser.
