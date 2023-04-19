const fs = require("fs");
//回调地狱的写法
/* fs.readFile('./ES6 笔记/resource/index1.txt',(err,data1)=>{
  fs.readFile('./ES6 笔记/resource/index2.txt',(err,data2)=>{
    fs.readFile('./ES6 笔记/resource/index3.txt',(err,data3)=>{
         let result = data1 + '\n'+ data2 + '\n' + data3;
         console.log(result.toString())
    })
  })
}) */
// 异步任务1
const p = new Promise((resolve, reject) => {
  fs.readFile("./ES6 笔记/resource/index1.txt", (error, data) => {
    if (error) {
      reject("文件1读取失败");
    } else {
      resolve(data.toString());
    }
  });
});
p.then(
  (value) => {   //此时value的值保存的文件1的内容
    // 异步任务2
    return new Promise((resolve, reject) => {
      fs.readFile("./ES6 笔记/resource/index2.txt", (error, data) => {//data返回的文件2的内容
        if (error) {
          reject("文件2读取失败");
        } else {
          resolve([value, data.toString()]);//成功则返回value，data形成的数组
        }
      });
    });
  },
  (reason) => {
    console.log(reason);
  }
)
  .then(
    (value) => {  //此时的value 为[value, data.toString()]
      //   异步任务3
      return new Promise((resolve, reject) => {
        fs.readFile("./ES6 笔记/resource/index3.txt", (error, data) => {
          if (error) {
            reject("文件3读取失败");
          } else {
            value.push(data.toString());//将文件3添加数组value里面
            resolve(value);
          }
        });
      });
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value.join("-----"));
    },
    (reason) => {
      console.log(reason);
    }
  );
