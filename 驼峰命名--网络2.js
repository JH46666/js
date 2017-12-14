var str1 = convertToCamelCase('background-image'); 

// -webkit-border-radius 转换后结果为 webkitBorderRadius 
var str2 = convertToCamelCase('-webkit-border-radius');

function convertToCamelCase (str){
        var n1 =  str.split('-');
        var  len = n1.length;
        if(n1[0] === ''){
            n1.shift
        }
        for (var i = 1;i<len;i++){
            if(n1[i] !==''){
                n1[i] = n1[i].charAt(0).toUpperCase() + n1[i].substring(1);
            }
        
        }
        return  n1.join('');
}
