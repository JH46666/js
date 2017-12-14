/*
 * 在提供的 HTML 和 CSS 的基础上，补充todoList的功能逻辑，具体要求如下。
 * 1、实现点击添加任务按钮时，获取输入框内容，如果输入框不为空则添加一个新的任务到任务列表中的功能
 * 2、实现点击任务 item 元素时，被点击任务元素如果带有类名 "checked"，则去除类名 "checked", 否则增加类名 "checked" 的功能
 * 3、实现点击任务 item 右边的删除按钮是，删除相应的任务 item 的功能
 */

var $operation = $('todoList-operation');

var txt = document.getElementById('add-task-input');
var oBtn = document.getElementById('js-add-task');
var oUl =document.querySelector('.todoList-content');

function add(){
		oBtn.onclick = function(){
			var oLi = document.createElement('li');
			var liText = document.createTextNode(txt.value);
			var p  = document.createElement('p');
			var span = document.createElement('span');
			var spanText = document.createTextNode('x');
			p.appendChild(liText);
			oLi.appendChild(p);
			oLi.setAttribute('class','task');
			oLi.appendChild(span);
			span.appendChild(spanText);
			span.setAttribute('class','close');
			oUl.appendChild(oLi);
		}  


}

// var close = $('.close');
// close.onclick = function(e){
// 	var oUl =document.querySelector('.todoList-content');
// 	var  ev =  ev || window.event;
//     var target = e.target ||ev.srcElement;
//     // 检查事件源 target 是否为 todo-item
//     if (target.nodeName.toLowerCase() == '.close' ){
// 	 $(this).parents('.task').remove();
// 	}
// }

function tododelect(){
	var tododelect = document.querySelector(".todoList-content");
	tododelect.onclick = function(e){
		var  ev =  ev || window.event;
	    var target = e.target ||ev.srcElement;
	    // 检查事件源 target 是否为 todo-item
	    if (target.nodeName.toLowerCase() == 'span' ){
		 target.parentNode.remove();
		}
	}




}

function todolist(){
	var todoList = document.querySelector(".todoList-content");
	  todoList.onclick = function (e) {
	  	var  ev =  ev || window.event;
	    var target = e.target ||ev.srcElement;
	    // 检查事件源 target 是否为 todo-item
	    if (target.nodeName.toLowerCase() == 'li' ){
			target.classList.toggle('checked');
		}
	};	




}

todoList();
tododelect();
add();


