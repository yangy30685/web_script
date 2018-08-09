var $a=$(".buttons a");
var $s=$(".buttons span");
var cArr=["p7","p6","p5","p4","p3","p2","p1" ];
var index=0;

$(".next").click(
		function(){
			nextimg();
		}

	)

$(".prev").click(
		function(){
			previmg();
		}
	)
//define the function

//previous slide
	function previmg()
	{
		cArr.unshift(cArr[6]);
		cArr.pop();

		//i is index starts from 
		//e is the currernt element
		//each is a loop remove the current class and add the class with index i
		$("li").each(
			function(i,e)
			{$(e).removeClass().addClass(cArr[i]);}
			)
		index--;
		if(index<0)
			{
				index=6;
			}
		show();
	}

//next slide
	function nextimg()
	{
		cArr.push(cArr[0]);
		cArr.shift();
		$("li").each(
				function (i,e)
				{$(e).removeClass().addClass(cArr[i]);}
				)
		index++;
		if(index>6){
			index=0;
		}
		show();
	}

//change via button below the images

$a.each(function()
{
		$(this).click(
		function()
		{
			var myindex=$(this).index();
			var b=myindex-index;
			if(b==0){return;}
			else if(b>0) 
			{
			var newarr=cArr.splice(0,b);
				cArr=$.merge(cArr,newarr);
			$("li").each(function(i,e){$(e).removeClass().addClass(cArr[i]);});
				index=myindex;
			show();
			}
			else if(b<0)
			{
				cArr.reverse();
			var oldarr=cArr.splice(0,-b);
				cArr=$.merge(cArr,oldarr);
				cArr.reverse();
			$("li").each(function(i,e){$(e).removeClass().addClass(cArr[i]);});
				index=myindex;
			show();
			}
		})
})

//change via the buttons

function show(){$($s).eq(index).addClass("blue").parent().siblings().children().removeClass("blue");}
	$(document).on("click",".p2",function(){previmg();return false;});

	$(document).on("click",".p4",function(){nextimg();return false;});

	$(".box").mouseover(function(){clearInterval(timer);});

	$(".box").mouseleave(function(){timer=setInterval(nextimg,4000);});
	
	timer=setInterval(nextimg,4000);