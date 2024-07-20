const celsius = 20;
const fahrenheit = 1.8 * celsius + 32;
console.log(fahrenheit);


let days = 28;
let hours = days * 24;
let minutes = days * hours * 60;
console.log(minutes);
console.log(hours);
console.log(days);


let health = 100;
let damage = 70;
let hp = "Зниження здоровля";
let newHealth = health - damage;
console.log(`Зниження здоровля ${hp}. ${(health / damage) * 10}HP.`);


let price = 240;
let get = 500;
let zdacha = get - price;
console.log(price);
console.log(get);
console.log(zdacha) / 10;


let floatingNumber = 7.85;
let roundedDownNumber = Math.floor(floatingNumber);
console.log(`Число з плаваючою комою: ${floatingNumber}`);
console.log(`Число після округлення до меншого: ${roundedDownNumber}`);


let stringWithFloat = "123.45";
let floatNumber = parseFloat(stringWithFloat);
console.log(`${stringWithFloat}`);
console.log(`${floatNumber}`);


let stringWithInteger = "12345";
let integerNumber = parseInt(stringWithInteger, 10);
console.log(`${stringWithInteger}`);
console.log(`${integerNumber}`);


let number = 144;
let squareRoot = Math.sqrt(number);
console.log(`${number}`);
console.log(`${squareRoot}`);


let integerValue = 12345;
let stringWithNumber = "67890";
let parsedInteger = parseInt(stringWithNumber, 10);
let stringFromInteger = integerValue.toString();
console.log(`${stringWithNumber}`);
console.log(`${parsedInteger}`);
console.log(`${integerValue}`);
console.log(`${stringFromInteger}`);
