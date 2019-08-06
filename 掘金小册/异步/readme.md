# js异步编程
## 什么是单线程，和异步有什么关系？
定义：同一时间只做一件事
原因：避免DOM渲染冲突，因为DOM渲染的时候，执行JS，如果是并发的情况下，DOM元素本身的渲染样式和JS操作的渲染样式相冲突，浏览器不知怎么渲染。同理两段js渲染的情况下，也可能会造成渲染冲突。
单线程的解决方案就是异步
## 异步的解决方案
事件轮询（event-loop）的原理解决，使用promise,async,await的方法
## 事件轮询（event-loop）
[执行讲解1](https://juejin.im/post/59e85eebf265da430d571f89)  
[事件轮询讲解](https://juejin.im/post/5c3d8956e51d4511dc72c200)
### 1. 宏任务和微任务
* macro-task宏任务：script,setTimeout,setInterval,
* micro-task微任务：process.nextTick,promise
执行一个宏任务，然后执行所有的微任务，再然后执行一个宏任务，在js中script这个整体算一个宏任务，所以主线程执行完成后，执行所有的微任务。
### 2. 同步任务和异步任务
![同步异步任务](./img/5.jpg)

### 3. setTimeout
对于setTimeout是一个异步任务，会去event-table注册,但是因为后面的参数时间限制，所以当后面假设是3秒，3秒过后才将函数放进event-queue中进行js引擎轮询，也就是主线程的任务执行完成了，js引擎存在monitoring process进程，不断的检查主线程执行栈是否为空，一旦为空就去event-queue检查等待被调用的函数。有时候出现很大的延时，原因是在主线程出现sleep这种很长时间的内容，然后3秒过后函数已经放在event-queue中了，但是主线程不为空，就继续等着。就算定时为0,HTML标准规定也是不能立即执行的，最小为4ms
### 4. setInterval
效果和setTimeout一样的，也就是每隔一定时间把注册的函数放入event-queue中，那么很可能看不出事件间隔了
### 5. node和浏览器执行的区别
浏览器：主线程------所有微任务-----一个宏任务-----所有微任务queue------一个宏任务  
node：主线程-------所有微任务------所有宏任务-----所有微任务
<<<<<<< HEAD
## async,await,Generator之间的关系
[async和await原理](https://juejin.im/post/5cd2ce1e6fb9a032092ea160#heading-9)
* Generator是ES6标准引入的新的数据类型。Generator可以理解为一个状态机，内部封装了很多状态，同时返回一个迭代器Iterator对象。可以通过这个迭代器遍历相关的值及状态。
*  Generator的显著特点是可以多次返回，每次的返回值作为迭代器的一部分保存下来，可以被我们显式调用。  
一般的函数使用function声明，return作为回调(没有遇到return，在结尾调用return undefined)，只可以回调一次。而Generator函数使用function*定义，除了return，还使用yield返回多次。
* return为generator函数close状态，无法捕获，yield为暂停状态，可以通过next一层一层的调用
* generator函数拥有三个方法next/return/throw  
1. next方式是按步执行，每次返回一个值,同时也可以每次传入新的值作为计算
```
function* foo(x) {
    let a = yield x + 1;
    let b= yield a + 2;
    return x + 3;
}
const result = foo(0) // foo {<suspended>}
result.next(1);  // {value: 1, done: false}
result.next(2);  // {value: 4, done: false}
result.next(3);  // {value: 3, done: true}
result.next(4);  //{value: undefined, done: true}
```
2. return则直接跳过所有步骤，直接返回 {value: undefined, done: true}
3. throw则根据函数中书写try catch返回catch中的内容，如果没有写try，则直接抛出异常
```
function* foo(x) {
  try{
    yield x+1
    yield x+2
    yield x+3
    yield x+4
    
  }catch(e){
    console.log('catch it')
  }
}
const result = foo(0) // foo {<suspended>}
result.next();  // {value: 1, done: false}
result.next();  // {value: 2, done: false}
result.throw();  // catch it {value: undefined, done: true}
result.next();  //{value: undefined, done: true}

```
执行throw的时候，还没有进入到try语句，所以直接抛错，抛出undefined为throw未传参数，如果传入参数则显示为传入的参数。此状态与未写try的抛错状态一致。
## 对于js异步的了解
因为js是单线程的机制，只有通过回调函数的形式解决单线程的弊端，但是由于多个相互依赖的回调函数很容易造成回调地狱，回调地狱耦合性很高，出现错误不易维护。然后出现了promise，promise解决了回调地狱的问题，promise的特点是状态一旦改变就不可再改变，promise实现链式调用，每次都返回一个新的promise，并且then后面返回的值都会被promise.resolve包裹。promise的缺点就是错误不好捕获，需要回调函数捕获，也无法取消promise,async 和 await 可以说是异步终极解决方案了，相比直接使用 Promise 来说，优势在于处理 then 的调用链，能够更清晰准确的写出代码，毕竟写一大堆 then 也很恶心，并且也能优雅地解决回调地狱问题。当然也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低。

![同步异步任务](./img/1.jpg)

