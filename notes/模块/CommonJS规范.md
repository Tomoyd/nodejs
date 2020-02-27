## CommonJS模块规范

1. #### 模块引用

   > 通过require()方法，接收一个参数（模块标识），引用一个模块的API到当前上下文中

   ```javascript
   val fs=require("fs")
   ```

2. #### 模块定义

   > 上下文提供的exports对象用于导出当前模块的方法或者变量，且是唯一的导出出口
   >
   > 在模块中存在一个module对象代表模块本身，exports为module的属性，node中一个文件就是一个属性
   >
   > 将属性或方法挂载到exports对象上作为属性即可定义导出的方式

   ```javascript
   // math.js
   exports.add=function(a,b){
       return a+b
   }
   // test.js
   let math=require("./math");
   let result=math.add(1,2);
   console.log(result)
   ```

3. #### 模块标识

   > 定义：传递给require()的参数
   >
   > **命名必须符合小驼峰**或者以..开头的相对路径绝对路径，可以没有文件后缀名.js

   CommonJS构建的模块导出和引入机制使得用户完全不用考虑变量污染，变量只在模块内有效，比命名空间方案更友好

## Node的模块实现

1. 路径分析
2. 文件定位
3. 编译执行

#### 模块分类

1. Node提供的核心模块：这些是已经加载到内存中，加载速度是最快的，可以省略1,2步
2. 用户编写的文件模块：运行时动态加载，需要完整的3个步骤，速度比核心模块慢

#### 实现

1. 优先从缓存中加载

   不论核心模块还是文件模块，require方法对相同的模块的二次加载都一律采用缓存优先，这是第一优先的，不同的是，核心模块的缓存检查先于文件模块的缓存检查

   缓存的是编译和执行之后的对象

2. 路径的分析和文件定位

   - 文件分析
     - 核心模块是优先级别仅次于缓存加载，所以自定义的模块标识符不要与核心模块相同
     - 路径形式，首先转化路径为真实路径，然后直接定位，引入
     - 自定义模块，非路径形式，要逐步查询node_modules中的模块

   - 文件定位

     - 文件扩展名分析：没有带扩展名的，node会按照.js .json .node的次序依次尝试
     - 目录分析和包：如果有package.json文件，则按照package.json 中main属性指定的文件名查询，否则按照，index文件名查询，然后进行文件扩展名解析

   - 模块编译

     - .js 文件，通过fs模块同步读取后编译
     - .node文件 用c/c++编写的扩展文件，通过dlopen()方法加载最后编译生成的文件
     - .json: 通过fs模块同步读取文件后，通过JSON.parse()解析返回结果
     - 其余文件，按照js文件载入

     每次编译成功的模块都会将其文件路径作为索引缓存在module._cache对象上，以提高二次引入的性能

     1. JavaScript模块的编译

        编译的过程中对JS文件的内容进行了头尾包装，在头部添加了（function(exports,require,module,\_\_filename,__\__dirname){\n,尾部添加了\n})

        调用之后exports对象返回给了调用方，

        exports是通过形参引用的，直接给exports赋值会改变其引用，所以module.exports与exports共存

     2. C/C++编译

        Node调用process.dlopn()方法进行加载和执行

        实际上不需要编译

     3. JSON文件

        通过fs读取之后，调用JSON.parse()方法获得对象，然后将其赋值给模块对象

   

   