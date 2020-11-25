let price;
let message;
const country = prompt('Введите страну назначения!');

if (country === null) {
    console.log('Отменено пользователем!');
} else {

    switch (country) {
    case 'Китай':
        price = 100;
        break;
    
    case 'Чили':
        price = 250;
        break;
    
    case 'Австралия':
        price = 170;
        break;
    
    case 'Индия':
        price = 80;
        break;
    
    case 'Ямайка':
        price = 120;
        break;    
    
        default:
        break;
    }

    if (price === undefined) {
        alert('В вашей стране доставка не доступна');
    } else {
        console.log('Доставка в ' + country +' будет стоить ' + price + ' кредитов');
    }
    

}

