// 定义装饰器函数
function myDecorator(target) {
  target.prototype.customMethod = function () {
    console.log('Custom method added by decorator');
  };
}

@myDecorator
class MyClass {
  // ...
}

const instance = new MyClass();
instance.customMethod();  // 输出: Custom method added by decorator
