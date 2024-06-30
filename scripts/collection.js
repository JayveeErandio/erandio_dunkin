collection = document.querySelectorAll(".collection");

	
for(let a = 0; a < collection.length; a++){
	collection[a].istouch = false;
	var istouch = false;
	collection[a].addEventListener("mousedown", function(){
		collection[a].istouch = true;
	});
	collection[a].addEventListener("mousemove", function(ev){
		if(collection[a].istouch)
			collection[a].scrollLeft -= ev.movementX
	});
	document.body.addEventListener("mouseup", function(){
		collection[a].istouch = false;
	});	
}
