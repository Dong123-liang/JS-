//reduce方法遍历数组
//reduce方法中有四个参数,参数pre若有初始值num则为num，如果没有初始值则初始值为数组的第一个值,之后的值为return返回值,value依次遍历下一个值。
//pre若无返回值则表示undefined

 let arrn=[1,2,3,4,5];
arrn.reduce(function(pre,cur,index,array){
console.log(pre,cur);
/*输出结果 
1 2
undefined 3
undefined 4
undefined 5
 */
//return 99
/*输出结果 
1 2
99 3
99 4
99 5
 */
},num) 



//用reduce方法统计数组中某一元素出现的次数

let arr = [1,23,43,1,2,3,4,1,22];
function arrCount(arr,num){
   return arr.reduce(function(total,value){
    total+= value===num?1:0;
    return total;
  },0)

}
console.log(arrCount(arr,1));//3
console.log(arrCount(arr,2));//1

//用reduce方法计返回数组中的最大值
function arrMAX(arr){
    return arr.reduce(function(pre,value){
        
    return   pre > value ? pre:value; //43
  
    })
}
console.log(arrMAX(arr));