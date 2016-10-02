// JavaScript Document
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];	
	}else{
		return getComputedStyle(obj,false)[name];	
	}
}
//easeing:运动形式
function move(obj,json,time,easeing,fn){
	clearInterval(obj.timer);
	var dis = {};
	var start = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];	
	}
	var count = parseInt(time/30);
	var n = 0;
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(easeing){
				case 'linear':
					var a = n/count;
					var cur = start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*a*a*a;	
				break;
				case 'ease-out':
					var a = 1 - n/count;
					var cur = start[name]+dis[name]*(1-a*a*a);	
					break;
			}
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opactiy:'+cur*100+')';		
			}else{
				obj.style[name] = cur + 'px';		
			}
		}
		if(n == count){
			clearInterval(obj.timer);
			fn && fn();	
		}
	},30);
}