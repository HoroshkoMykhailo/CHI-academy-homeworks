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