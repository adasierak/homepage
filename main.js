const name = "Kasia";
const age = 39;
console.log(`Witam, mam na imię ${name} i mam ${age} lat`);

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(1);

console.log(myResult);

console.log(age);

function greet(age, firstName) {
  console.log(`Witaj ${firstName} mam ${age} lat`);
}

greet(5, `Ada`);

const greeting = (age, firstName) => {
  console.log(`Witaj ${firstName} mam ${age} lat`);
};

greeting(17, `Mike`);

function farewell(guestName) {
  console.log(`${guestName}, dziekujemy za odwiedzenie naszej strony!`);
}
farewell("Jim");

const description = document.querySelector(`.christmas__description--js`);
description.innerHTML = `i tak to powoli idzie`;

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
createContent(`.christmas__description--js`, `idzie jak po grudzie`);
createContent(`.christmas__footer--js`, `i po świętach!`);

function calculate(incoming) {
  console.log(`początkowy numer ${incoming}`);
  return incoming * 10;
}

const result = calculate(32);

console.log(result);

function introduction(name, number) {
  console.log(
    `Dobrze Cię u nas widzieć ${name}! Jesteś ${number} uczestnikiem programu.`
  );
}

introduction(`Kevin`, 3);

const humanOne = {
  name: "Maciek",
  age: 32,
};
humanOne.age = 35;
const humanTwo = {
  name: "Stefan",
  age: humanOne.age,
};

console.log(humanOne);
console.log(humanTwo);

function greet(firstName, age) {
  console.log(
    `${firstName} witamy na naszej stronie!Cieszymy się że masz już ${age} lat!`
  );
}

greet(`Leon`, 5);
