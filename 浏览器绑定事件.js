/**
 * 修复事件对象不兼容的地方
 */
function fixEventObj(e) {
  e.target = e.target || e.srcElement;
  e.preventDefault = e.preventDefault || function() {
    e.returnValue = false;
  };
  e.stopPropagation = e.stopPropagation || function() {
    e.cancelBubble = true;
  };

  return e;
}

/**
 * 跨浏览器的绑定事件
 */
function on(elem, type, handle) {
  if (elem.addEventListener) { // 检测是否有标准方法
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) { // 试图使用 `attachEvent`
    elem.attachEvent('on' + type, function(event) {
      event = fixEventObj(event);
      handle.call(elem, event); // 使用 call 来改变 handle 的作用域，使其指向 elem
    });
  } else { // 兜底
    elem['on' + type] = function() {
      var event = fixEventObj(window.event);
      handle.call(elem, event);
    }
  }
}

// 调用
on(document.body, 'click', function(e) {
  console.log('哈哈哈，好用！', e);
});