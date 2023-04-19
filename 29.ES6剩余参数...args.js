//...args剩余参数（展开运算符）
//允许一个表达式在某处展开。展开运算法 在 多个参数（函数调用）、多个元素（用于数组和字面量）和多个变量（用于解构赋值） 地方使用。
//剩余参数语法允许我们将一个不定数量的参数表示为一个数组。
function sum(...args) {
    // 因为...args 将函数内的所有剩余实参（这里是所有实参），转换成一个数组
    // args --> [1, 2, 3]
    return args.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10


  //如果函数的最后一个命名参数以 ... 为前缀，则它会将所有后面剩余的是实参个数包裹成一个数组。
  // 例子

function test(a, b, ...args) {
    console.log(args)
  }
  
  test(1,2,3,4) // [3, 4]

 //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
//从数组中移除元素:

//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值