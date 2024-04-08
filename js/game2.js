/*  Добавить
какой сейчас ход
Добавить количество ходов ограничение
время игры

массив не карт а картинок
рубашка для калоды

выбор поля не через промт а через попап

добавить имя игрока
сохронять в локал сторедж рекорды для разных полей + время
выводить рекорд для каждого типа поля кол ходов и время
обновлять в локал сторедже




*/

const game = document.getElementById("game");
// console.log(game);

function startGame(game, cardsCount) {
    //Создание массива пар чисел

    let cardNumberArray = [];
    let firstCard = null;
    let secondCard = null;

    for (let i = 1; i <= cardsCount; i++) {
        cardNumberArray.push(i, i);
    }

    // console.log(cardNumberArray);

    //перемешивание массива

    for (let i = 0; i < cardNumberArray.length; i++) {
        let randomIndex = Math.floor(Math.random() * cardNumberArray.length);
        [cardNumberArray[i], cardNumberArray[randomIndex]] = [
            cardNumberArray[randomIndex],
            cardNumberArray[i],
        ];
    }

    console.log(cardNumberArray);

    // Настройка сетки
    let columns = 2;

    switch (cardsCount) {
        case 2:
            columns = 2;
            break;
        case 3:
        case 9:
            columns = 3;
            break;
        case 4:
        case 6:
            columns = 4;
            break;
        case 5:
        case 10:
            columns = 5;
            break;
        default:
            columns = 8;
    }

    game.style = `grid-template-columns: repeat(${columns}, 1fr);`;

    //Создание карт

    cardNumberArray.forEach((element) => {
        let card = document.createElement("div");
        card.textContent = element;
        card.classList.add("card");
        game.append(card);

        //Клик по карточке

        card.addEventListener("click", () => {
            //проверка что на карту нельзя нажать дважды
            if (
                card.classList.contains("open") ||
                card.classList.contains("success")
            ) {
                return;
            }

            // если две карты открыты и не совпадают то мы их закрываем
            if (firstCard !== null && secondCard !== null) {
                firstCard.classList.remove("open");
                secondCard.classList.remove("open");
                firstCard = null;
                secondCard = null;
            }

            card.classList.add("open");
            console.log(card);
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
                    firstCard.classList.add("success");
                    secondCard.classList.add("success");
                }
            }
            if (
                cardNumberArray.length ===
                document.querySelectorAll(".success").length
            ) {
                setTimeout(() => {
                    alert("Победа!");
                    game.innerHTML = "";
                    let cardCount = prompt("Введите количество пар", 4);
                    startGame(game, cardCount);
                }, 400);

                console.log("Победа!");
            }
        });
    });
}

let cardsCount = Number(prompt("Введите кол-во пар", 4));
startGame(game, cardsCount);
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
