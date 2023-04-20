//普通的对象中的键只能为字符串
let commonObj={
    "1":'这键名是字符串1',
    1:'这个键名实际也是字符串1'
}
console.log(commonObj);//输出的只有{ '1': '这个键名实际也是字符串1' }，因为键名1和'1'实际都是字符串1，后面的覆盖了前面的键值。
//但是map集合中的键名可以为任意值
let newmap = new Map([['H5','css'],['js','jq']]);
newmap.set('name','轨迹');//set追加值
newmap.set(function(){},'guiji');
newmap.set(commonObj,'对象也可以作为键名');
console.log(newmap.get(commonObj));//get获取值  对象也可以作为键名
console.log(newmap);
console.log(newmap.has('name'));//map.has()检测map中是否有含有的值
console.log(newmap.values());//获得键名
console.log(newmap.keys());//获得键值
console.log(newmap.entries());//获得键值对
console.log([...newmap.values()]);//获得键名,转为数组形式
console.log([...newmap.entries()]);
newmap.forEach((values,keys) =>{//利用forEach遍历获得和键名键名
console.log(values,keys);

})
//map.clear()清除map值