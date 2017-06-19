define(function(require,exports,module){
	var $ = require('jquery');
	
	require('./header.css');
	
	var Header = function(){
		this.init();
	};
	
	Header.prototype = {
		
		init:function(){
			this.bindEvent();
		},
		
		bindEvent:function(){
			var context = this;
			
			$('.header').on('click',function(){
				context.render();
//				alert();
			});
		},
		
		render:function(){
			$('.header').html('没错，这就是模块header');
		}
	};
	
	module.exports = Header;
})
