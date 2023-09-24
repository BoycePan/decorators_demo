function logged(target, propKey, descriptor) {
  let value = descriptor.initializer();
  descriptor.initializer = () => {
    console.log(`initializing ${propKey} with value ${value}`);
    return value + 1;
  };
  console.log('7行 - test.js -: => ', value);
  // return descriptor;
}

class C {
  @logged x = 1;
}

const a = new C();
console.log('17行 - test.js -: => ', a);
console.log('17行 - test.js -: => ', Object.getOwnPropertyDescriptor(a, 'x'));
