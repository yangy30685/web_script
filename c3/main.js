window.onload = function (){
    console.log('demo js is working');

    /************************ Seperate Line **************************/
    var wrapper = document.getElementById('wrapper');    
    var span = document.getElementsByTagName('span')[0];
 
    //click to move icon
    span.onmousedown = function () {
        wrapper.style.background = 'red';
        wrapper.style.border = '4px dashed blue';
        
        //while move
        document.onmousemove = function (ev) {
        var ev = ev || event;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLfe || document.body.scrollLeft;

        wrapper.style.left = ev.clientX + scrollLeft  -60 + 'px';
        wrapper.style.top = ev.clientY+ scrollTop - 60 + 'px';
        }

        //release mouse to fix icon
        span.onmouseup = function() {
            wrapper.style.background = '';
            wrapper.style.border = '2px solid black';
            //?
            document.onmousemove = document.onmouseoup = null;
        } 
    }
}