
window.onload=function () 
{	
	var wrap = document.getElementById("wrap");
	var black = document.getElementById("black");
	var big = document.getElementById("big");
	
	//navigate button
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	//container for big pics
	var img = document.getElementById("img");
	var link = wrap.getElementsByTagName("a");
	var cur = 0;

	for( var i = 0; i<link.length; i++ )
	{
		link[i].index = i;
		link[i].onclick = function()
		{
			var src = this.href;
			cur = this.index;
			black.style.display = "block";
			big.style.display = "block";
			big.style.left = big.style.top = "50%";
			big.style.marginLeft = -big.offsetWidth/2 + "px";
			big.style.marginTop = -big.offsetHeight/2 + "px";
			//recall large pics
			img.src = src;
			//left button
			left.onclick = function()
				{
					cur--;
					if(cur<0)
						{cur = link.length-1;}
					img.src = link[cur].href;
				}
			//right button
			right.onclick = function()
				{
					cur++;
					if(cur>=link.length)
						{cur = 0;}
					img.src = link[cur].href;
				}
			//stop a tag
			return false;
		}
	}

	//cancel the big pic
	black.onclick = function()
	{
		black.style.display = "none";
		big.style.display = "none";
	}
}