# JavaScript DOM (Document Object Model) Summary

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can manipulate the document's structure, style, and content. The DOM allows JavaScript to access and modify the web page while it is running in the browser.

Below are key concepts and examples to help understand the JavaScript DOM:

## 1. Selecting Elements

To manipulate elements in the DOM, you first need to select them.

- `document.getElementById(id)`: Selects an element by its id.
- `document.querySelector(selector)`: Selects the first element that matches the CSS selector.
- `document.querySelectorAll(selector)`: Selects all elements that match the CSS selector.
- `document.getElementsByClassName(className)`: Selects elements by class name.
- `document.getElementsByTagName(tagName)`: Selects elements by tag name.

**Example:**

```javascript
const elementById = document.getElementById('myElement'); // Selects an element with id "myElement"
const firstParagraph = document.querySelector('p'); // Selects the first <p> element
const allDivs = document.querySelectorAll('div'); // Selects all <div> elements
```

## 2. Manipulating Content

You can change the content of elements using properties like `textContent`, `innerHTML`, and `innerText`.

- `element.textContent`: Changes the text inside an element.
- `element.innerHTML`: Changes the HTML content inside an element.
- `element.innerText`: Similar to `textContent` but may not show hidden elements.

**Example:**

```javascript
const heading = document.querySelector('h1');
heading.textContent = 'New Heading Text'; // Changes the text of <h1> element
```

## 3. Changing Styles

You can modify the style of elements using the `style` property.

**Example:**

```javascript
const box = document.querySelector('.box');
box.style.backgroundColor = 'lightblue'; // Changes the background color to light blue
box.style.fontSize = '20px'; // Changes the font size to 20 pixels
```

## 4. Creating and Removing Elements

You can dynamically create and remove elements in the DOM using `createElement`, `appendChild`, `removeChild`, etc.

- `document.createElement('tag')`: Creates a new element.
- `parent.appendChild(element)`: Adds an element to a parent element.
- `parent.removeChild(element)`: Removes a child element from a parent.

**Example:**

```javascript
// Creating a new <div> element and adding it to the body
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';
document.body.appendChild(newDiv);

// Removing an element
const oldElement = document.querySelector('#oldElement');
oldElement.parentNode.removeChild(oldElement);
```

## 5. Event Handling

You can respond to user actions like clicks, hovers, or key presses using event listeners.

- `element.addEventListener('event', callback)`: Attaches an event listener to an element.

**Example:**

```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Button clicked!');
});
```

## 6. Traversing the DOM

The DOM allows you to navigate between elements using properties like `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, and `previousSibling`.

**Example:**

```javascript
const list = document.querySelector('ul');
const firstItem = list.firstElementChild; // Gets the first <li> element in a <ul>
const parent = firstItem.parentNode; // Gets the parent element of the first <li>
```

## 7. Form Manipulation

You can manipulate form elements and their values using JavaScript.

**Example:**

```javascript
const inputField = document.querySelector('#nameInput');
inputField.value = 'New Value'; // Sets the value of the input field

// Handling form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    alert('Form submitted!');
});
```