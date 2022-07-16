// Mouse hover parallax
$('html').mousemove(function(e){
		
	var wx = $(window).width();
	var wy = $(window).height();
	
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	
	var newx = x - wx/2;
	var newy = y - wy/2;
	
	$('span').text(newx + ", " + newy);
	
	$('#wrapper div').each(function(){
		var speed = $(this).attr('data-speed');
		if($(this).attr('data-revert')) speed *= -1;
		TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		
	});
});

// Animated Collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}