import { deprecate } from 'core-decorators';

class Dog {
  @deprecate
  peeInRoom() {}

  @deprecate('这个方法后期可能会被删除')
  peeInBed() {}
}

let dog = new Dog();
dog.peeInRoom();
dog.peeInBed();

console.log('---------分割线----------');

import { readonly } from 'core-decorators';

class Meal {
  @readonly
  entree = 'steak';
}

var dinner = new Meal();

// TypeError: Cannot assign to read only property 'entree' of object '#<Meal>'
// dinner.entree = 'salmon';

console.log('---------分割线----------');

import { time } from 'core-decorators';
class Bird {
  @time('useTime')
  sing() {
    // console.time();
    // console.timeEnd();
    for (let i = 0; i < 10000000; i++) {}
  }
}

var bird = new Bird();
bird.sing();
bird.sing();
