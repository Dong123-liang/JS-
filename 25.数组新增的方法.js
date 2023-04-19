// 1.for...of 遍历迭代器
// let arr = [1, 2, 3, 4, 5];
// for (let item in arr) {
//   console.log(arr[item]); //1 2 3 4 5
// }

// 2.@@iterator属性  需要通过 Symbol.iterator 来访问
// let arr = [1, 2, 3];
// let iterator = arr[Symbol.iterator]();
// console.log(iterator); //Object [Array Iterator] {}
// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }

// 3.entrie方法
// let arr = [1, 2, 3];
// let entries = arr.entries();
// console.log(entries); //Object [Array Iterator] {}
// console.log(entries.next()); //{ value: [ 0, 1 ], done: false }
// console.log(entries.next()); //{ value: [ 1, 2 ], done: false }
// console.log(entries.next()); //{ value: [ 2, 3 ], done: false }
// console.log(entries.next()); //{ value: undefined, done: true }

// let entries2 = arr.entries();
// for (let item of entries2) {
//   console.log(item); //[ 0, 1 ] [ 1, 2 ] [ 2, 3 ]
// }

// 4.keys方法
// let keys = arr.keys();
// console.log(keys); //Object [Array Iterator] {}
// console.log(keys.next()); //{ value: 0, done: false }
// console.log(keys.next()); //{ value: 1, done: false }
// console.log(keys.next()); //{ value: 2, done: false }
// console.log(keys.next()); //{ value: undefined, done: false }

// let keys2 = arr.keys();
// for (let item of keys2) {
//   console.log(item); //0 1 2
// }

// 5.values方法
// let values = arr.values();
// console.log(values); //Object [Array Iterator] {}
// console.log(values.next()); //{ value: 1, done: false }
// console.log(values.next()); //{ value: 2, done: false }
// console.log(values.next()); //{ value: 3, done: false }
// console.log(values.next()); //{ value: undefined, done: true }

// let values2 = arr.values();
// for (item of values2) {
//   console.log(item); //1 2 3
// }

// 6.Array.from 属于浅拷贝
// let arr = [1, 2, { name: "liu" }];
// let arr2 = Array.from(arr);
// arr2[0] = 111;
// arr2[2].name = "xiao";
// console.log(arr); //[ 1, 2, { name: 'xiao' } ]

// let arr3 = [1, 2, 3, 4, 5];
// let arr4 = Array.from(arr3, function (item) {
//   return item + "元";
// });
// console.log(arr4); //[ '1元', '2元', '3元', '4元', '5元' ]

// 7.Array.of 根据传入的参数创建一个新的数组
// let arr = Array.of(1, 2, 3);
// console.log(arr); //[ 1, 2, 3 ]
// let arr2 = [1, 2, { name: "liu" }];
// let arr3 = Array.of(...arr2); //这也属于浅拷贝
// arr3[0] = 111;
// arr3[2].name = "xiao";
// console.log(arr2); //[ 1, 2, { name: 'xiao' } ]

// 8.填充元素 fill
// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// a.fill("a", 3, 5);
// console.log(a); //[1,2,3,'a','a',6,7,8]

// 创建数组并初始化值
// let newArr = new Array(7).fill(1);
// console.log(newArr); //[1,1,1,1,1,1,1]

// 9.copywithin 将[arg2,arg3)的元素替换待起始位置为arg1的位置上
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.copyWithin(2, 4, 6);
// console.log(arr); //[1,2,5,6,5,6,7]

// 10.find findIndex 返回第一个满足条件的值或索引
// let arr = [1, 2, 3, 4, 5];
// let rs = arr.find((item) => {
//   return item % 5 === 0;
// });
// console.log(rs); //5
// let rs2 = arr.findIndex((item) => {
//   return item % 5 === 0;
// });
// console.log(rs2); //4

// 11.includes 查询指定的索引位置后是否存在某元素
//arr.includes(searchElement, fromIndex)
//searchElement：必须。需要查找的元素值。
//fromIndex：可选。表示判断的起始位置。从该索引处开始查找 searchElement。
//如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
//!!!但是includes类型查找引用型类型(obj,function)会有问题，因为地址问题查询不到。使用find
let arr = [1, 2, 3, 4, 5];
let state = arr.includes(3);
console.log(state); //true
let state2 = arr.includes(3,3);
console.log(state2); //false

let arrobj = [{name:'董良'},{name:'周杰伦'},{name:'轨迹'}]
let includesArrObj = arrobj.includes({name:'周杰伦'});
console.log(includesArrObj);//flase 由于includes中查找元素相当于新开辟了空间，与原数组中引用类型的地址不匹配，所以返回false，此时可以使用find查询
let  findObj  = arrobj.find((item)=>{
return item.name === '周杰伦';//{ name: '周杰伦' }
})
console.log(findObj)