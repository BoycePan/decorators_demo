function dec(id) {
  console.log('enter', id);
  return (target, property, descriptor) => {
    console.log('out', id);
  };
}

// 如果一个方法/属性 有多个装饰器，先从外到内进入，再由内到外执行
class Example {
  @dec(1)
  @dec(2)
  method() {}
}
// enter 1
// enter 2
// out 2
// out 1
