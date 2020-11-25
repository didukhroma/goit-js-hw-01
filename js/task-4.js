let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let balance

const value = prompt('Введите количество дроидов!');
value = Number(value);

if (value === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = value * pricePerDroid;
    balance = credits - totalPrice;

    if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
        } else {
    console.log('Вы купили ' + value + ' дроидов, на счету осталось ' + balance + ' кредитов.')
        }
}

