/* 
  为什么装饰器不能用于函数？
      装饰器只能用于类和类的方法/属性，不能用于函数，
        因为存在函数提升。
*/

var counter = 0;
var add = function () {
  counter++;
};

@add
function foo() {
}

//因为函数提升，使得实际执行的代码是下面这样。

var counter;
var add;

@add
function foo() {
}

counter = 0;

add = function () {
  counter++;
};

console.log('---------分割线----------');


var readOnly = require("some-decorator");
@readOnly
function foo() {
} 


var readOnly;

@readOnly
function foo() {
}

readOnly = require("some-decorator");
