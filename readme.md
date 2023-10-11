# 装饰器简介

- Decorator 是 ES7 提出的实验性特性
- 装饰器可以对一些对象进行包装然后返回一个被包装过的对象，
- 可以装饰的对象包括：类，类的属性，类的方法。
- 而 Decorator 的原理和作用则更为简单，就是包装对象，然后返回一个新的对象描述（descriptor），
  其作用也非常单一简单，基本上就是获取包装对象的宿主、键值几个有限的信息。

# TC39 提案几个阶段

[class-validator](https://github.com/typestack/class-validator)

- Stage 0 - 设想：只是一个想法，可能有 Babel 插件。
- Stage 1 - 建议：这是值得跟进的。
- Stage 2 - 草案：初始规范。
- Stage 3 - 候选：完成规范并在浏览器上初步实现。
- Stage 4 - 完成：将添加到下一个年度版本发布中。
