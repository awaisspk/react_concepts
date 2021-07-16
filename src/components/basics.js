let book = {
  title: 'book of anonymous',
  author: 'anonymous',
  isChecked: false,
};

function pureCheckoutBook(book) {
  let copy = { ...book };
  copy.isChecked = true;
  return copy;
}

book2 = pureCheckoutBook(book);
console.log(book);
console.log(book2);
console.log(book2);

let a = () => {};
let b = () => {};
console.log(a === b);

function minimum(array) {
  array.sort();
  return array[0];
}

const items = [7, 1, 9, 4];
const min = minimum(items);
console.log(min);
console.log(items);

let person = {
  firstName: 'Bob',
  lastName: 'Loblaw',
  address: {
    street: '123 Fake St',
    city: 'Emberton',
    state: 'NJ',
  },
};

let a = [1, 2, 3, 4, 5];
b = a.concat();
console.log(a === b);
