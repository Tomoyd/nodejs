#### 定时器 setTimeout setInterval

调用时，创建的定时器会被插入到定时器观察者内部的一个红黑树中，每次Tick执行是，从中取出，如果超过该事件，它的回调函数就会执行

#### process.nextTick()

可以使用setTimeout达到相同的效果

```javascript
setTimeout(()=>{
    //todo
},0)
```

但是定时器的精度不够

实际上process.nextTick()较为轻量：只是将回调函数放到队列中，下一次Tick取出执行即可

setTimeout要创建红黑树和迭代等操作，时间复杂度为O(lg(n)),nextTick时间复杂度为O(1)

#### setImmediate()

与process.nextTick()方法十分相似

在两个同时，出现时会先执行process.nextTick,process.nextTick属于idle观察者，

setImmediate属于check观察者，在每一轮循环检查中，idle观察者优先于I/O观察者，IO观察者优于check观察者

nextTick的回调函数保存在一个数组上，setImmediate的结果保存在链表上

在行为上，process.nextTick在每轮循环中会将数组中的回调函数全部执行完，

setImmediate在每轮循环中执行链表中的一个回调函数

