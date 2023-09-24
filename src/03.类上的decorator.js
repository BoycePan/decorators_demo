//1.target -> 类本身
function desc(target) {
  target.isAnimal = true;
}

@desc
class Dog {}

console.log(Dog.isAnimal); // true

//2.对不同的目标对象应用同一个 decorator ，但同时又需要有一些差别
//可以在装饰器外面再封装一层函数。更加灵活
function desc2(isAnimal = false) {
  return function (target) {
    target.isAnimal = isAnimal;
  };
}

@desc2(true)
class Cat {}
console.log(Cat.isAnimal); // true

@desc2(false)
class Person {}
console.log(Person.isAnimal); // false

//对方法/属性也是类似的
function enumerable(isEnumerable) {
  return function (target, key, descriptor) {
    descriptor.enumerable = isEnumerable;
    return descriptor;
  };
}

class Dog3 {
  @enumerable(true)
  eat() {}
}

const dog = new Dog3();
for (const key in dog) {
  console.log('key--->', key);
}
