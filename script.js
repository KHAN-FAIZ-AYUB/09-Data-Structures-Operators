'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Oredr received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      ` Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `here is your delicious pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
};

///////////////////////////////////////
// Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Khan');
console.log('' || 'Khan');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || 'Hello' || 23 || null);

restaurant.numGuests = 25;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2)
/*
///////////////////////////////////////
// Rest Pattern and Parameters
// ****1) Destructuring*****
// SPREAD because on LEFT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risoto, otherFood);

//*****Objects******
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// ****2) Functions*****
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(1, 2, 3, 4, 5);
add(8, 2, 5, 3, 2, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('chilli flex');
*/
///////////////////////////////////////
// *****Spread Operator*****
/*
const arr = [7, 8, 9];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// ******Copy array******
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// ******Join 2 array******
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// *****ITERABLES: array, strings, maps, sets. NOT Objects
const str = 'John';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// *****Real world Example*****
const ingredients = [
  //   prompt("Let's make pasta! Ingreadient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// *****Object*****
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Khan' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

///////////////////////////////////////
// *****Destructuring Objects*****
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole , 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole , 21',
  starterIndex: 1,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// ****Default Variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(starters);

// *****Mutating Variables*****
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// *****Nested Objects*****
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

///////////////////////////////////////
// ****Destructuring Arrays****
/*
const arr = [2, 4, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// ***switching variables***

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// ****Receive 2 return values from a function****

const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

// ****Nested destructuring****

const nested = [1, 2, [3, 4]];
const [i, , [, k]] = nested;
console.log(i, k);

// ****Default values****

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
