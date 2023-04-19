//Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，
//用于指定发生错误时的回调函数。
/* p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
 */


  // 写法一
const promise1 = new Promise(function(resolve, reject) {
    try {
      throw new Error('test');
    } catch(e) {
      reject(e);
    }
  });
  promise.catch(function(error) {
    console.log(error);
  });
  
  // 写法二
  const promise2 = new Promise(function(resolve, reject) {
    reject(new Error('test'));
  });
  promise.catch(function(error) {
    console.log(error);
  });
  //比较上面两种写法，可以发现reject()方法的作用，等同于抛出错误。
  
  //如果 Promise 状态已经变成resolved，再抛出错误是无效的。  
  const promise3 = new Promise(function(resolve, reject) {
    resolve('ok');
    throw new Error('test');
  });
  promise3
    .then(function(value) { console.log(value) })
    .catch(function(error) { console.log(error) });
  // ok
  //上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。
  //因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。

  //Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
  //上面代码中，一共有三个 Promise 对象：一个由getJSON()产生，两个由then()产生。它们之中任何一个抛出的错误，都会被最后一个catch()捕获。
  getJSON('/post/1.json').then(function(post) {
    return getJSON(post.commentURL);
  }).then(function(comments) {
    // some code
  }).catch(function(error) {
    // 处理前面三个Promise产生的错误
  });
  