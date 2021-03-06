/**
 *  预编译：
 *    在Javascript真正被解析之前, js解析引擎会首先把整个文件进行预处理, 以消除一些歧义。
 *
 *
 *  全局对象GO：
 *    - 浏览器中，js引擎会整合script标签的内容，产生window对象
 *    - 在node中，会产生global对象
 *    - 变量会变为GO对象的属性
 *    - 函数会变为GO对象的方法
 *
 *
 *  活动对象AO：（函数执行上下文）  用来保存当前函数内部的执行环境
 *    - 函数调用时产生， 函数调用结束时销毁
 *
 *
 *  全局预编译顺序：（GO对象）
 *    - 先查找变量声明，把变量名作为GO对象的属性名，值为undefined
 *    - 再查找函数声明，把函数名作为GO对象的属性名，值为function
 *    - 结果：如果函数名和变量名同名，则属性值会被后面声明的函数体覆盖
 *
 *
 *  函数预编译顺序：（AO对象）
 *    - 函数调用产生AO对象
 *    - 先查找形参变量名，作为AO对象的的属性名，值为undefined
 *    - 再查找变量声明，作为AO对象的属性名，值为undefined
 *    - 再把实参的值赋值给形参
 *    - 最后查找函数声明，作为AO对象的属性名，值为function
 *
 *
 *  对于AO对象优先级：
 *    局部函数 > 实参 > 形参 = 局部变量
 *
 */
