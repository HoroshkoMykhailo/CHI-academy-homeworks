for(let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;

while(i <= 10) {
    console.log(i);
    i++;
}

const someArray = ["string", 2, false, 4, "hello", true, 7, 8, "something", 10];

someArray.forEach((el) => console.log(typeof el));

const arrayLength = someArray.length;

for(let i = 0; i < arrayLength; i++) {
    console.log(typeof someArray[i]);
}

i = 0;
while(i < arrayLength) {
    console.log(typeof someArray[i]);
    i++;
}

i = 0;
do {
    console.log(typeof someArray[i]);
    i++;
} while(i < arrayLength)

const people = [
    {
        name: "John",
        age: 30,
        pets: ["cat", "dog"],
    },
    {
        name: "Pete",
        age: 34,
        pets: ["cat", "dog", "fish"],
    },
    {
        name: "Mary",
        age: 18,
        pets: [],
    },
    {
        name: "Bob",
        age: 15,
        pets: ["fish", "cat", "dog"],
    },
    {
        name: "Alice",
        age: 31,
        pets: ["cat"],
    },
    {
        name: "Jack",
        age: 16,
        pets: [],
    },
];

const filteredPeople = people.filter((person) => {
    return person.age > 20;
});
console.log(filteredPeople);

people.map((person) => {
    person.pets.push("bird");
});
console.log(people);

const array = Array(10).fill(42);
array.splice(5, 0, "answer");
console.log(array);
console.log(array.find((el) => el === "answer"));