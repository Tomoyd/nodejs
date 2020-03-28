let assert=require("assert");
let a=true
assert.ok(a,"a should be a truthy")
/*
* 控制回调流程
*
* 1. 飞去来器效应：发生在一组回调按序执行时代码中的许多嵌套回调，递增的左缩进，以及左缩进的回退构成了类似飞去来器的形状
* 2. 避免飞去来器效应，通过声明函数
* 3.使用async 流程控制库
* 串行或并行执行的 next
* */
