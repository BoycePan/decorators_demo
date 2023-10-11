function beforeExecution(target, key, descriptor) {
  const originalMethod = descriptor.value;

  // Redefine the original method
  descriptor.value = function (...args) {
    console.log('Executing before the original method');
    // Execute the original method
    originalMethod.apply(this, args);
  };

  return descriptor;
}

class MyClass {
  aa = 123;
  @beforeExecution
  myMethod() {
    console.log('Executing the original method', this.aa);
  }
}

const instance = new MyClass();
instance.myMethod();
