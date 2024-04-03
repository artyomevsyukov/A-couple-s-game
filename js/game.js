let cardCount = 4;
let cardNumberArray = [];

//Создание массива пар чисел
for (let i = 1; i <= cardCount; i++) {
    cardNumberArray.push(i, i);
}
// console.log(cardNumberArray);

//перемешивание массива

for (let i = 0; i < cardNumberArray.length; i++) {
    let randomIndex = Math.floor(Math.random() * cardNumberArray.length);
    // console.log(randomIndex);
    let temp = cardNumberArray[i];
    cardNumberArray[i] = cardNumberArray[randomIndex];
    cardNumberArray[randomIndex] = temp;
}

console.log(cardNumberArray);
