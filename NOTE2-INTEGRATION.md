# Integrating TourGuide.js into note2-conversations

This document provides instructions on how to integrate TourGuide.js into your note2-conversations repository.

## Overview

TourGuide.js is a JavaScript library for creating user tours and onboarding steps for your web applications. It allows you to create interactive tours to guide users through various features of your application.

## Integration Steps

### Step 1: Create your note2-conversations Repository

If you haven't already, create your note2-conversations repository on GitHub.

```bash
# Clone your new repository
git clone https://github.com/sabbah13/note2-conversations.git
cd note2-conversations
```

### Step 2: Copy Required Files from TourGuide.js

Copy the following files from the forked TourGuide.js repository:

1. `dist/tour.js` - The main TourGuide.js JavaScript file
2. `dist/css/tour.min.css` - The TourGuide.js CSS file
3. `example.html` (optional) - An example implementation

You can use the following commands:

```bash
# Create necessary directories
mkdir -p assets/js
mkdir -p assets/css

# Copy files from the forked repository
cp /path/to/tourguide-js/dist/tour.js assets/js/
cp /path/to/tourguide-js/dist/css/tour.min.css assets/css/
cp /path/to/tourguide-js/example.html ./
```

### Step 3: Include TourGuide.js in Your HTML

Add the following lines to your HTML file's `<head>` section:

```html
<!-- TourGuide.js CSS -->
<link rel="stylesheet" href="assets/css/tour.min.css">
```

Add the following before the closing `</body>` tag:

```html
<!-- TourGuide.js -->
<script src="assets/js/tour.js"></script>
```

### Step 4: Initialize TourGuide.js

Add the following JavaScript code to initialize TourGuide.js:

```javascript
// Initialize TourGuide
const tg = new tourguide.TourGuideClient({
    dialogWidth: 300,
    backdropColor: 'rgba(0, 31, 63, 0.8)',
    dialogAnimate: true,
    dialogPlacement: 'bottom',
    progressBar: '#0d6efd',
    exitOnClickOutside: true,
    showStepDots: true,
    keyboardControls: true,
    autoScroll: true,
    autoScrollSmooth: true
});

// Create a button or trigger to start the tour
document.getElementById('startTourBtn').addEventListener('click', function() {
    tg.start();
});
```

### Step 5: Add Tour Steps to Your HTML Elements

Add the `data-tg-tour` attribute to elements that you want to include in your tour:

```html
<div class="feature-element" data-tg-tour="This is a tour step explanation" data-tg-title="Step Title">
    Feature content goes here
</div>
```

## Example Usage

See the `example.html` file for a complete working example of TourGuide.js implementation.

## Configuration Options

TourGuide.js provides many configuration options:

- `dialogWidth`: Width of the dialog in pixels
- `backdropColor`: Color of the backdrop (rgba format recommended)
- `dialogAnimate`: Enable/disable dialog animations
- `dialogPlacement`: Placement of the dialog relative to the element ('top', 'bottom', 'left', 'right')
- `progressBar`: Color of the progress bar
- `exitOnClickOutside`: Allow exiting the tour by clicking outside the dialog
- `showStepDots`: Show/hide step indicator dots
- `keyboardControls`: Enable/disable keyboard navigation (arrow keys)
- `autoScroll`: Automatically scroll to elements
- `autoScrollSmooth`: Use smooth scrolling animation

For more options, refer to the [TourGuide.js documentation](https://tourguidejs.com/docs/).

## Advanced Usage

### Programmatic Steps

You can also define steps programmatically:

```javascript
const steps = [
    {
        content: "This is the first step",
        title: "Welcome!",
        target: "#element1"
    },
    {
        content: "This is the second step",
        title: "Feature Overview",
        target: "#element2"
    }
];

const tg = new tourguide.TourGuideClient({
    steps: steps
});
```

### Event Callbacks

TourGuide.js provides several callback methods:

```javascript
// Called when the tour is finished
tg.onFinish(function() {
    console.log("Tour finished!");
});

// Called before exiting the tour
tg.onBeforeExit(function() {
    console.log("About to exit the tour");
});

// Called before changing steps
tg.onBeforeStepChange(function() {
    console.log("About to change steps");
});
```

## Troubleshooting

- If the tour doesn't start, check browser console for errors
- Ensure elements with `data-tg-tour` attributes are visible when the tour starts
- Check that TourGuide.js files are correctly included in your HTML

## Resources

- [TourGuide.js Documentation](https://tourguidejs.com/docs/)
- [TourGuide.js GitHub Repository](https://github.com/sjmc11/tourguide-js)
