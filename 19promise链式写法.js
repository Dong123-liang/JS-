//Promise.prototype.then()
// Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。
// 前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。
// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

const { rejects } = require("assert");
const { resolve } = require("path");




const p =new Promise((resolve,rejects)=>{
    setTimeout((()=>{
        resolve('用户数据');
    }),1000)
})
//调用then 方法 
//1. 如果返回的结果是 非promise 类型的属性，状态为成功值(控制台返回fulfilled)，返回的值为return值,若没有return则返回值为undefined,但不影响其状态成功。
//2.如果then方法返回的是一个 promise 类型属性(相当嵌套一层)，那么外面then方法的返回状态和返回值，与里面的promise相关。
//3.抛出错误 throw ('出错啦!'); 状态返回rejects ,返回值为throw抛出的值
const result = p.then(value =>{
    console.log(value);
    // return 1;

    // return new promise((resolve,rejects)=>{
    //   resolve('ok');
    //   rejects('error');
    // })

    throw new Error('出错啦!');
},reason => {
    console.warn(reason);
})

console.log(result);

//then方法的返回结果是Promise对象，对象状态由回调函数的执行结果决定,所以决定其可以链式调用
// 例如p.then(value =>{}).then(value =>{}).then(rejects =>{})