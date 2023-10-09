function logged(target, propKey, descriptor) {
  let value = descriptor.initializer();
  //应用在属性上是 initializer
  //应用在方法上是 value
  descriptor.initializer = () => {
    console.log(`initializing ${propKey} with value ${value}`);
    return value + 1;
  };
}

class C {
  @logged x = 1;
}

const a = new C();
console.log('17行 - test.js -: => ', a);
console.log('17行 - test.js -: => ', Object.getOwnPropertyDescriptor(a, 'x'));
