let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
    
}


const fruits = ["Orange", "Mango", "Apple", "Banana", "Strawberry", "Pear"];

// let i = 0;

while (i < fruits.length) {
    console.log(`${i}: ${fruits[i]}`);
    i++;
}

const people = 
    {
        name: "John",
        age: 30,
        occupation: "engineer",
        address: "Kenya"
    }



while (i < Object.keys(people).length) {
    console.log(Object.keys(people)[i]+ ": " +Object.values(people)[i]);
    i++;
}

//
const arrPeople = [
    {
        name: "John",
        age: 30,
        occupation: "engineer",
        address: "Kenya"
    },
    {
        name: "Doe",
        age: 30,
        occupation: "engineer",
        address: "Kenya"
    }
]

while (i < arrPeople.length) {
    console.log(arrPeople[i].name+ ": " +arrPeople[i].occupation);
    i++;
}