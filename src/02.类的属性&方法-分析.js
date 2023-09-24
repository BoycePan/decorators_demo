// 转化流程分析
// 步骤 1
function Dog() {}

// 步骤 2
Object.defineProperty(Dog.prototype, 'bark', {
  value: function () {
    return 'wang!wang!';
  },
  enumerable: false,
  configurable: true,
  writable: true,
});

//在 bark 方法上应用 @readonly 之后，JS 引擎就会在进行 步骤2 之前调用这个 decorator：
let descriptor = {
  value: function () {
    return 'wang!wang!';
  },
  enumerable: false,
  configurable: true,
  writable: true,
};

// decorator 接收的参数与 Object.defineProperty 一致
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
descriptor = readonly(Dog.prototype, 'bark', descriptor) || descriptor;

Object.defineProperty(Dog.prototype, 'bark', descriptor);

/* 
所以， 当 decorator 应用到类的方法/属性上 作用就是返回一个新的 descriptor，并把这个新返回的 descriptor 应用到目标方法上。
*/
