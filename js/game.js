const game = document.getElementById("game");
// console.log(game);

function GameStart(game, cardCount) {
    let cardNumberArray = [];
    let firstCard = null;
    let secondCard = null;

    //Создание массива пар чисел
    for (let i = 1; i <= cardCount; i++) {
        cardNumberArray.push(i, i);
    }
    // console.log(cardNumberArray);

    //перемешивание массива

    for (let i = 0; i < cardNumberArray.length; i++) {
        let randomIndex = Math.floor(Math.random() * cardNumberArray.length);
        // console.log(randomIndex);

        [cardNumberArray[i], cardNumberArray[randomIndex]] = [
            cardNumberArray[randomIndex],
            cardNumberArray[i],
        ];
        // let temp = cardNumberArray[i];
        // cardNumberArray[i] = cardNumberArray[randomIndex];
        // cardNumberArray[randomIndex] = temp;
    }

    console.log(cardNumberArray);

    // Настройка сетки
    let columns = 2;

    switch (cardCount) {
        case 2:
            columns = 2;
            break;
        case 3:
            columns = 3;
            break;
        case 4:
            columns = 4;
            break;
        case 5:
            columns = 5;
            break;
        case 6:
            columns = 6;
            break;
        default:
            columns = 6;
    }

    game.style = `grid-template-columns: repeat(${columns}, 1fr);`;

    //Создание карт
    for (const cardNumber of cardNumberArray) {
        let card = document.createElement("div");
        card.textContent = cardNumber;
        game.append(card);
        card.classList.add("card");

        //Клик по карточке
        card.addEventListener("click", () => {
            if (
                card.classList.contains(
                    "open" || card.classList.contains("success")
                )
            ) {
                return;
            }

            if (firstCard !== null && secondCard !== null) {
                firstCard.classList.remove("open");
                secondCard.classList.remove("open");
                firstCard = null;
                secondCard = null;
            }

            card.classList.add("open");
            console.log("Карточка по которой произошлел клик", card);

            if (firstCard === null) {
                firstCard = card;
            } else {
                secondCard = card;
            }
            console.log("firstCard: ", firstCard);
            console.log("secondCard: ", secondCard);

            if (firstCard !== null && secondCard !== null) {
                let firstCardNumber = firstCard.textContent;
                let secondCardNumber = secondCard.textContent;

                if (firstCardNumber === secondCardNumber) {
                    console.log("Карточки равны");
                    firstCard.classList.add("success");
                    secondCard.classList.add("success");
                    firstCard.classList.remove("open");
                    secondCard.classList.remove("open");
                }
                console.log("Обе карточки открыты");
            }
            console.log(document.querySelectorAll(".success").length);
            console.log(cardNumberArray.length);
            if (
                cardNumberArray.length ===
                document.querySelectorAll(".success").length
            ) {
                setTimeout(() => {
                    alert("Победа!");
                    game.innerHTML = "";
                    let cardCount = Number(prompt("Введите количество пар", 4));
                    GameStart(game, cardCount);
                }, 400);
                console.log("Victory");
                //
            }
        });
    }
}

let cardCount = Number(prompt("Введите количество пар", 4));
GameStart(game, cardCount);

// firstCard
// firstCardNumber
// secondCard
// secondCardNumber
// textContent
/* 
// forof
// создание карт
// create element
// textContent
// append
// вывести карты и стилизовать их
// обработчик онклик
// открытие карточки появление изчезнавение цифр 
переменные для хранение открытых карт
при наведение на опен цвет не меняется
32

выводить в консоль чтобы понимать где менять

условия присвоения переменным карт
if else
35
условия открыты две карты или нет
null
сравнение карт
если открыты обе то 



условие вначале если две карты открыты

Почему у переменной можно удалить класс? 
при null присваивается карта элемент div

.success 


44 убрать баг при двойном нажатие на карту (содержит contains())


Игра завершина
условие вывод результата что игра азвершина 
 */
