function removeChild(node) {
    var p = node && node.parentNode;

    if (!p) {
        return null;
    }

    return p.removeChild(node);
}


var delDom = document.getElementsByClassName('del');
delDom = Array.prototype.slice.call(delDom); // 还记得 HTMLCollection 的概念嘛？这里要转成数组！

for (var i = 0,len = delDom.length; i < len; i++) {
    removeChild(delDom[i]);
}



