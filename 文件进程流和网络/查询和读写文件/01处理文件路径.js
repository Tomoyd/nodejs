/**
 * 处理文件路径
 * 文件路径用来表示具体的文件
 * 相对路径
 * 绝对路径
 * 在Node中使用字符床来处理文件路径，但是这样会使问题变得难以处理
 * 例如
 * 相连接路径的不同不疯时，有些事以"/"结尾的有些不是，而且在不同的操作系统中路径的分隔符也不一样
 * Node的path模块可以规范化，连接和解析路径
 * 还可以将绝对路径转换为相对路径，提取路径的组成部分以及确定路径是否存在
 */

/**
 * 1.规范化路径
 * 在存储和使用路径之前对路径进行规范化
 * path模块的normalize()函数来规范化路径字符串
 */
var path=require("path");
var newPath=path.normalize('/foo/bar//baz/asdf/quux/..');
console.log(newPath)
/**
 * 2.连接路径
 * 使用path.join()函数，可以连接任意多个路径字符串，经所有路径字符串依次传递给path.join()函数
 */
var pathJoin=path.join('/foo','bar','baz/asdf','quuux','..')
console.log(pathJoin) // '\foo\bar\baz\asdf' join 对路径进行了规范化
/**
 * 3.解析路径
 * 使用path.resolve()函数可以将多个路径解析为一个规范化的绝对路径
 * 该函数的作用好像是对这些路径挨个进行cd操作，不同的是这些路径可以是文件并且可以是不必实际存在的
 * 它不会利用底层文件系统来尝试判断路径是否存在
 * 而只是对路径字符串进行处理
 *
 */
var resolvePath=path.resolve('/foo/bar','./baz')
console.log(resolvePath);
/**
 * 4.查找两个绝对路径之间的向对路径
 * path.relative()
 */
var relativePath=path.relative('/data/orandea/test/aaa','/data/orandea/impl/sss')
console.log(relativePath) //..\..\impl\sss
/**
 * 5.提取路径的组成部分
 * path.dirname()获取路径的目录部分
 * path.basename()获取路径的文件名，扩展名作为第二个参数，获取文件名不包括扩展名
 * path.extname()获取文件的扩展名，
 */
var dirname=path.dirname('/foo/text.js')
var basename=path.basename('/foo/text.js')
var basenameN=path.basename('/foo/text.js','.js')
var extname=path.extname('/foo/text.js')
console.log(dirname,basename,basenameN,extname)// '/foo text.js text .js'
/**
 *  6. 确定路径是否存在
 *  使用path.exists()函数
 *  Node8 用fs.exists替代了path.exists()
 *  exists()函数进行了IO操作，它是异步的，要向其传递一个回调函数，
 *  同步版本是existsSync()函数
 */
var fs=require('fs')
fs.exists('/foo/test',function(exists){
    console.log('exists',exists)
});
console.log(fs.existsSync('/foo'))