// 提示范围数据
var data = ['apple', 'banana', 'carambola', 'grape', 'lemon', 'orange', 'watermelon'];

// 获取所有的inputs
var $autocomplete = $('.autocomplete');
var $curInput;
var $window = $(window);
var $body = $(document.body);




/**
 * 展示框
 * @param【string】value 判断提示的文本
 * 
 */

function autocomplete(value){
		// var len = data.length;
		// for (var i = 0;i<len;i++){
		// 	var liText = ('<li class="item">' + data[i]+ '</li>');
		//     $autocomplete.append(liText);	
		// }
		
		var itemsArr = [];
		data.forEach(function (item){
		  	if(item.indexOf(value) > -1){
		  		itemsArr.push('<li class="item">' + item + '</li>');
		  	}
		});
		$autocomplete.html(itemsArr);
}



/**
 * 1、完善 `input` 框 `focus` 事件绑定逻辑，当事件出发时，设置 `.autocomplete` 提示框显示，并定位到触发事件的输入框的正下方。
 * 注：要求同时只能出现一个 `.autocomplete` 提示框
 */

$body.on('focus', 'input', function() {
		var left = $(this).offset().left;  
        var top = $(this).offset().top;  
        var height = $(this).outerHeight();

        var  value = $(this).val();
        //outerHeight是获取高度，包括内边距，height是也是获取高度，不过只包括文本高度  
        $autocomplete.css('left', left);  
        $autocomplete.css('top', top + height); 
        $autocomplete.css('display', 'block');


        //更新当前的input对象
        $curInput = $(this);
        autocomplete(value);
});
/**
 * 2、完善 `input` 输入框的 `keyup` 事件绑定逻辑，同时获取输入框内容，修改  `.autocomplete` 提示框的提示选项内容
 */
$body.on('keyup', 'input', function() {
		// var txt = $(this).value;
		// txt.indexOf($(this).value);
		var value = $(this).val();
		autocomplete(value);

});
/**
 * 3、完善 `.autocomplete .item` 的 `click` 事件绑定逻辑，当点击提示框选项时，填充选项文本数据到相应的input框中
 */
$body.on('click', '.autocomplete .item', function() {
	var itemValue = $(this).text();
	$curInput.val(itemValue);
	$autocomplete.hide();

});
$window.on('click',function(){
	var target = event.target;
	if(target.tagName  !== 'input'){
		$autocomplete.hide();
	}




})