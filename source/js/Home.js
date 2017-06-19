define(function(require,exports,module){
	
	var $ = require('jquery');
	
	var Home = function(){
		this.init();
	};
	
	Home.prototype = {
		init:function(){
			this.bindEvent();
		},
		
		bindEvent:function(){
			var context = this;
			
			$('.home').on('click',function(){
				context.show();
//				alert();
			});
		},
		
		show:function(){
			alert("模块~");
		}
	};
	
	module.exports = Home;
});
