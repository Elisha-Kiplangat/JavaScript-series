# JavaScript Loops and DOM Manipulation

This guide introduces JavaScript loops and basic DOM (Document Object Model) manipulation, essential skills for creating dynamic and interactive web pages.

## JavaScript Loops

Loops let you run code multiple times, especially useful for working with lists or collections of data.

### For Loop
A `for` loop executes a block of code a specific number of times.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("This is loop number", i);
}

### While Loop
A `while` loop repeats as long as a specified condition is `true`.

```javascript
let count = 0;
while (count < 5) {
    console.log("Count is", count);
    count++;
}
