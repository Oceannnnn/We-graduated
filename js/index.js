//document.addEventListener('touchmove', function (event) {
//event.preventDefault();
//}, false);

var a = 0;
var body_height = $(window).height();
//alert(body_height)
var c = document.getElementById('BOX').getElementsByClassName('box');
//alert(c.length)

//$('body').swipeUp(function(){
//	a++;
//	if(a>c.length-1){
//		a=c.length-1;
//		return;
//	}
//	$('#BOX .box').eq(a).find('.ani').hide().removeClass('animated');
//	setTimeout(function(){
//		$('#BOX .box').eq(a).find('.ani').show().addClass('animated');
//	},1000)
//	var top = -body_height * a;
//	$('#BOX').css('margin-top',top);
//	
//})
//
//$('body').swipeDown(function(){
//	a--;
//	if(a<0){
//		a=0;
//		return;
//	}
//	$('#BOX .box').eq(a).find('.ani').hide().removeClass('animated');
//	setTimeout(function(){
//		$('#BOX .box').eq(a).find('.ani').show().addClass('animated');
//	},1000)
//	var top = -body_height * a;
//	$('#BOX').css('margin-top',top);
//})

//音乐开始
	function music(){
		var a = document.getElementById('music');
		var b = a.getElementsByClassName('music_2')[0];
		var c = a.getElementsByClassName('music_1')[0];
		var d = a.getElementsByTagName('audio')[0];
		var str = 1;
		a.onclick = function(){
			if (str==1) {
				b.style.animation = 'none';
				c.style.display = 'none';
				d.pause();
				str=2;
			} else{
				b.style.animation = 'music 2s linear infinite';
				c.style.display = 'block';
				d.play();
				str=1;
			}
			
		}
	}
music();

//var endY;//滑动结束时的Y轴坐标
//var startY;//滑动开始时deY轴坐标
//var scroll;//滑动滚出去的距离
var index=0;//当前显示的第几个div;从0开始计算;
var cLength=c.length;
var aImgHeight=c[0].offsetHeight*(cLength-1);
var imgHeight=c[0].offsetHeight;
var BOX = document.getElementById('BOX');
////var box=BOX.getElementsByClassName('box');
BOX.addEventListener("touchstart",function(e){
//  var touch=e.touches[0];
//  startY=touch.pageY;
//  alert(startY) 
	index++;
});
BOX.addEventListener("touchmove",function(e){
//		var touch=e.touches[0];
//	    startY=touch.pageY;
	   
        BOX.style.marginTop=-imgHeight*index+'px';
		console.log(BOX.style.marginTop)
        
		if(index>c.length-1){
			index=c.length-1;
			return;
		}
        $('#BOX .box').eq(index).find('.ani').hide().removeClass('animated');
		setTimeout(function(){
			$('#BOX .box').eq(index).find('.ani').show().addClass('animated');
		},3)
});
BOX.addEventListener("touchend",function(e){
    var endtop=BOX.offsetTop;
//  alert(endtop)
});