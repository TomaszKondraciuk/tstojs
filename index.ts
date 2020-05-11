const foo = null ?? 'default string';

class Message {
  #message = "Howdy"

  greet() { console.log(this.#message) }
}

const greeting = new Message();


const regex = /\b(apple)+\b/;
const fruits = "pear, apple, banana, apple, orange, apple";

for (const match of fruits.matchAll(regex)) {
  console.log(match);
}

let sum = (x: number, y: number): number => {
    return x + y;
}

