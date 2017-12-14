/*
 * 实现函数 convertToCamelCase 功能，其会转换传入的字符串参数 string 为驼峰格式。具体要求如下：
 * 1、参数 string 是以中划线（-）连接单词的字符串，需将第二个起的非空单词首字母转为大写,
 * 如 -webkit-border-radius 转换后的结果为 webkitBorderRadius。
 * 2、返回转换后的字符串
 */
function convertToCamelCase (Num){
        var n1 =  Num.split('-');
        
       
        
        var  len = n1.length;
        
        n2 = 0;
        
        for (var i = 0;i<len;i++){
           
            d = n1[i];
            
          
            
            n2 = n2+d;
            
            n3 =  n2.substring(1);
            
           
        
        }
        
         console.log(n2);
           