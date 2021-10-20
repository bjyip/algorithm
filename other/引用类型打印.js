var arr = [];
var obj ={a:1};
arr.push(obj);
console.log(JSON.stringify(arr));// 第一次打印
obj.a = 2;
console.log(JSON.stringify(arr));// 第二次打印
var obj1 = obj;
obj ={a:3};
console.log(JSON.stringify(arr));// 第三次打印
obj1.a =4;
console.log(JSON.stringify(arr));//第四次打印