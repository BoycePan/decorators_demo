// 转化流程分析
// 步骤 1
function Dog() {}

// 步骤 2

let descriptor = {
  value: function () {
    return 'wang!wang!';
  },
  enumerable: false,
  configurable: true,
  writable: true,
};
Object.defineProperty(Dog.prototype, 'bark', descriptor);

//在 bark 方法上应用 @readonly 之后，JS 引擎就会在进行 步骤2 之前调用这个 decorator：

// decorator 接收的参数与 Object.defineProperty 一致
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  descriptor.enumerable = true;
  return descriptor;
}
descriptor = readonly(Dog.prototype, 'bark', descriptor) || descriptor;

Object.defineProperty(Dog.prototype, 'bark', descriptor);

/* 
所以， 当 decorator 应用到类的方法/属性上 作用就是返回一个新的 descriptor，并把这个新返回的 descriptor 应用到目标方法上。
*/
let dog = new Dog();
for (const key in dog) {
  console.log('20行 - 01.类的属性&方法.js -: => ', key);
}
