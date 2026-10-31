# M6 Project Structure

## Project Organisation Before Implementation

At the beginning of the project, the files were located in the project
folder, but they were empty and did not yet have defined responsibilities.

```text
project-folder/
├── index.html
├── style.css
├── theme-init.js
└── script.js
```

The HTML file contained only the basic document structure. The CSS and
JavaScript files had not yet been implemented.

## Project Organisation After Implementation

```text
project-folder/
├── index.html
├── style.css
├── theme-init.js
└── script.js
```

The files remain in the project folder, but each file now has a separate
role in the application.

## File Responsibilities

### index.html

The `index.html` file contains the page structure. It includes the visitor
name input, the theme toggle button, the Save settings button, and the
previous-visit message.

### style.css

The `style.css` file controls the visual presentation of the page. It
contains the light-theme and dark-theme styles, page layout, spacing,
background colors, text colors, and control styling.

### theme-init.js

The `theme-init.js` file handles early theme restoration. It reads the
saved settings before the stylesheet is applied and sets the correct theme
on the document. This helps prevent a visible flash of the wrong theme.

### script.js

The `script.js` file handles the main application behavior. It loads and
saves the settings object, manages the theme button, saves the visitor
name, and updates the previous-visit timestamp.

## Storage Organisation

The settings are stored together as one JSON object under one Local Storage
key:

```text
portfolioSettings
```

The object contains:

```text
theme
visitorName
lastVisit
```

## Reason for the Organisation

The files are separated by role so that the page structure, visual styling,
early theme initialization, and interactive behavior are easier to locate,
understand, test, and maintain.

The final version does not include unused event handlers or unrelated
persistence code. Naming is consistent across the HTML and JavaScript,
including `theme-toggle`, `save-settings`, `visitor-name`, `last-visit`,
and `portfolioSettings`.