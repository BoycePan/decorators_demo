function logged(target, propKey, descriptor) {
  // descriptor.writable = false
  console.log('6行 - 001.类的属性.js  => ', descriptor)

  //默认值
  let initVal = descriptor.initializer();
  //应用在属性上是 descriptor.initializer
  //应用在方法上是 descriptor.value
  descriptor.initializer = () => {
    console.log('9行 - 001.类的属性.js  => ', )
    console.log(`initializing ${propKey} with value ${initVal}`);
    return ++initVal;
  };
}

class C {
  @logged x = 1;
}

const a = new C();
// console.log('16行 - 001.类的属性.js -: => ', 123213)
console.log('17行 - test.js -: => ', Object.getOwnPropertyDescriptor(a, 'x'));
