let price;
let message;
const country = prompt('Введите страну назначения!');

if (country === null) {
  console.log('Отменено пользователем!');
} else {
  switch (country.toLowerCase()) {
    case 'китай':
      price = 100;
      break;

    case 'чили':
      price = 250;
      break;

    case 'австралия':
      price = 170;
      break;

    case 'индия':
      price = 80;
      break;

    case 'ямайка':
      price = 120;
      break;

    default:
      break;
  }

  if (price === undefined) {
    alert('В вашей стране доставка не доступна');
  } else {
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
  }
}
