
/* 
function desc(target) {
  target.isAnimal = true;
}

@desc
class Dog {} */


// 等同于
class Dog {}

function desc(target) {
  target.isAnimal = true;
}
Dog = desc(Dog) || Dog;

