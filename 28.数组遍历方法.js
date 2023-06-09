
      // ES5数组新增的方法：forEach(),filter(),map(),some(),every()
      // forEach()方法遍历数组。无返回值，用于内部操作，比如作加法器，动态添加表格元素,循环绑定事件。
      // filter()过滤‘满足条件’的值，组成一个新的数组。返回值：数组
      // map() 对每一个元素进行同样的操作，返回一个新的数组。返回值：数组
      // some()  查询是否有满足条件的元素。返回值：布尔类型
      // every() 是否每个元素都满足条件。返回值：布尔类型

      //------------1.forEach()方法遍历数组--------------
/*       var arr = [1, 2, 3, 4, 5]
      var sum = 0
      arr.forEach(function(value, index, array) {
          console.log(`值:${value}`);
          console.log(`索引${index}`);
          console.log(`原数组${array}`);
          sum += value
      })
      console.log(sum); */

    //计算数组中某一个值出现的次数  
/*       var search = function(nums, target) {
    let obj={}
    if(!nums.includes(target)) return 0
    nums.forEach((value)=>{
        if(!obj[value]){
            obj[value] = 1
        }else{
            obj[value]++
        }
    })
    return obj[target]
    };

    console.log(search( [5,2,2,7,7,8,8,10],8)) */

      // // -------------2.filter()过滤数组------------------
      // var arr2 = new Array(22, 434, 54, 665, 78)
      // var newArr2 = arr2.filter(function(value, index, array) {
      //     // 满足条件的每一个元素会被添加到一个新数组中，最后会返回新生成的数组
      //     return value % 2 === 0
      // })
      // console.log(newArr2);

      // ------------------3.map()方法--------------

/*       var arr4 = [1, 2, 4, 5]
      var newArr4 = arr4.map(function(value, index, array) {
          return value * value
      })
      console.log(newArr4); */

      // ------------------4.some()方法查询是否有满足条件的元素--------------
      // var arr3 = ['apple', 'banana', 'orange']
      // var boolean = arr3.some(function(value, index, array) {
      //     // 当查找到该元素时，直接return一个true值，后面的元素不会再查找比较。可以通过浏览器调试工具debug验证
      //     return value === 'banana'
      // })
      // console.log(boolean);

      // ------------------5.every()方法--------------
/*       var arr5 = [1, 3, 5, 6, 7]
      var boolean5 = arr5.every(function(value) {
          return value < 8
      })
      console.log(boolean5); */

      // ------------------6.indexOf()方法--------------
 /*      var arr6 = [11, 22, 3, 3, 54, 35, 43, 53];
      console.log(arr6.indexOf(54)); //4
      console.log(arr6.lastIndexOf(22)); //1
      console.log(arr6.indexOf(2));//-1 */
      
//------------------ 数组二分法查找-----------------
/* var missingNumber = function(nums) {
    let left = 0
    let right = nums.length - 1
    while( left <= right){
        let mid =Math.floor((left + right) / 2)
        if(nums[mid] != mid){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return left
};
console.log(missingNumber([0,1,3])) */