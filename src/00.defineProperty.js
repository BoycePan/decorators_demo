/* 
 Object.defineProperty(obj, prop, descriptor)
  为一个对象 增加一个属性或更改一个属性
  obj: 目标对象
  prop: 属性名
  descriptor: 针对该属性的描述符
    configurable     delete删除属性 或 修改该属性的定义描述对象
    enumerable       能否通过for-in循环返回属性
    writable         能否修改属性的值
    value            初始值 

  Object.getOwnPropertyDescriptor(o: any, p: PropertyKey)
  获取对象指定属性 的 属性描述符
*/

const obj = {
  name: '张三',
  age: 18,
};

Object.defineProperty(obj, 'profile', {
  writable: false,
  configurable: true,
  enumerable: true,
  value: '描述信息',
});

console.log('25行 - 00.defineProperty.js -: => ', Object.getOwnPropertyDescriptor(obj, 'profile'));
// obj.profile = 'woman';
// console.log('28行 - defineProperty.js -: => ', obj.profile);
