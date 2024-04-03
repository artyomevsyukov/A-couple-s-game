const game = document.getElementById("game");
console.log(game);

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

//Создание карт
for (const cardNumber of cardNumberArray) {
    let card = document.createElement("div");
    card.textContent = cardNumber;
    game.append(card);
    card.classList.add("card");
    card.addEventListener("click", () => {
        card.classList.add("open");
    });
}

/* 
forof
создание карт
create element
textContent
append
вывести карты и стилизовать их
обработчик онклик
открытие карточки появление изчезнавение цифр 
переменные для хранение открытых карт
условия присвоения переменным карт
35
условия открыты две карты или нет
null

Почему у переменной можно удалить класс? 
при null присваивается карта элемент div

убрать баг при двойном нажатие на карту

условие вывод результата что игра азвершина 
 */
