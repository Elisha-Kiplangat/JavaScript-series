
for (let i = 0; i <= 10; i++) {
    console.log(`${i}:: Js`)
}

const fruits = ["Orange", "Mango", "Apple", "Banana", "Strawberry", "Pear"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`)
}

const people = 
    {
        name: "John",
        age: 30,
        occupation: "engineer",
        address: "Kenya"
    }



for (let i = 0; i < Object.keys(people).length; i++) {
    console.log(`${Object.keys(people)[i]} :  ${Object.values(people)[i]}`)
}

//  ----------------------- PATTERNS
// 1.
// *
// **
// ***
// ****
// *****
// ******

let rows = 5;
let pattern = "";

for (let i = 0; i <= rows; i++) {

    for (let j = 0; j <=  i; j++) {
        pattern += "*";
    }

    pattern += "\n";
}

console.log(pattern);

// 2.
// *******
// ******
// *****
// ****
// ***
// **
let row2 = 5;
let pattern2 = "";

for (let i = 0; i <= row2; i++) {

    for (let j = 0; j <= row2 - i; j++) {
        pattern2 += "*";
    }

    pattern2 += "\n";
}

console.log(pattern2);

// 3.
//         *
//        **
//       ***
//     ****
//    *****
//  ******
let row3 = 5;
let pattern3 = "";

for (let i = 0; i <= row3; i++) {

    for (let j = 0; j <= row3 - i; j++) {
        pattern3 += " ";
    }

    for (let k = 0; k <= i; k++) {
        pattern3 += "*";
    }

    pattern3 += "\n";
}

console.log(pattern3);

// 4.
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
let row4 = 5;
let pattern4 = "";

for (let i = 0; i <= row4; i++) {

    for (let j = 0; j <= row4 - i; j++) {
        pattern4 += " ";
    }

    for (let k = 0; k <= 2 * i; k++) {
        pattern4 += "*";
    }

    pattern4 += "\n";
}

// diamond pattern 

for (let i = 0; i <= row4; i++) {

        for (let k = 0; k <= i; k++) {
        pattern4 += " ";
    }
    for (let k = 0; k <= (row4 - i) * 2; k++) {
        pattern4 += "*";
    }

    pattern4 += "\n";
}

console.log(pattern4);