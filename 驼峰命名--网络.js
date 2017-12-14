/*
 * 实现函数 convertToCamelCase 功能，其会转换传入的字符串参数 string 为驼峰格式。具体要求如下：
 * 1、参数 string 是以中划线（-）连接单词的字符串，需将第二个起的非空单词首字母转为大写,
 * 如 -webkit-border-radius 转换后的结果为 webkitBorderRadius。
 * 2、返回转换后的字符串
 */
// background-image 转换后结果为 backgroundImage 
var str1 = convertToCamelCase('background-image'); 

// -webkit-border-radius 转换后结果为 webkitBorderRadius 
var str2 = convertToCamelCase('-webkit-border-radius');

function convertToCamelCase(str) {
  // 去除中划线分隔符获取单词数组
  var strArr = str.split('-');
  // 如果第一个为空，则去掉
  if(strArr[0] === '') {
    strArr.shift();
  } 
  // 遍历第二个单词到最后一个单词，并转换单词首字母为答谢
  for(var i = 1, len = strArr.length; i < len; i++){
    // 如果不为空，则转成大写
    if(strArr[i] !== '') {
       strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
    }   
  }
  return strArr.join('');
}
