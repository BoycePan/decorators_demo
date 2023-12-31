/**
 * @param {*} target: Dog.prototype
 * @param {*} key: 属性名
 * @param {*} descriptor: 描述对象
 * @return {*}
 */
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  descriptor.enumerable = true;
  console.log('9行 - 01.类的属性&方法.js -: => ', descriptor);
  return descriptor;
}

class Dog {
  @readonly
  bark() {
    return 'wang!wang!';
  }
  /* test() {
    return 'test11';
  } */
}
let dog = new Dog();
for (const key in dog) {
  console.log('20行 - 01.类的属性&方法.js -: => ', key);
}
