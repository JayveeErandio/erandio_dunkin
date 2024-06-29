collection = document.querySelector(".collection");
if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
	collection.style.overflowX = "hidden";
	
var istouch = false;
collection.addEventListener("mousedown", function(){
	istouch = true;
	console.log(89)
});
collection.addEventListener("mousemove", function(ev){
	if(istouch)
		collection.scrollLeft -= ev.movementX
});
document.body.addEventListener("mouseup", function(){
	istouch = false;
});	