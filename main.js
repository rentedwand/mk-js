const min = 0;
const max = 100;
const attCount = 10;

function getUserName() {
    const userName = prompt("Привет, как тебя зовут, милый друг?");
    return userName;
}

const userName = getUserName(); 

const getRandomNumber = maxLimit => Math.round(Math.random() * maxLimit);
const randomNumber = getRandomNumber(max);
 
const playGame = (minLimit, maxLimit, attsNumber, number, name) => {
    alert(`Здарова, ${name}
    Я загадал число большее, чем ${minLimit}, и меньшее, чем ${maxLimit}.
    У тебя ${attsNumber} попыток отгадать его. Удачи, бро!`)
    for (let i = 1; i <= attCount; i++) {
        const answer = prompt(`Ну, что думаешь?`)
        if (answer > number) {
            alert(`Число которое я загадал - меньше. У тебя осталось ${attsNumber - i}`)
        } else if (answer < number) {
            alert(`Число которое я загадал - больше. У тебя осталось ${attsNumber - i}`)
        } else {
            alert(`${name}, ты молодец!
            Все отгадал с ${i}-ой попытки.`)
            return  
        }
       
    }
    alert(`${name}, гэйм овер, чувак.. Сегодня не твой день: ты продул!`)
}

playGame(min, max, attCount, randomNumber, userName);