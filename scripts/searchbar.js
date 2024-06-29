search = document.querySelector("input[type='search']")
searchPlaceholder = document.querySelector("#search_placeholder");
searchBar = document.querySelector("#search_bar");
searchBar.onclick = function(){
	search.focus()
}
		
search.addEventListener("input", function(){
	if(search.value.length >= 1)
		searchPlaceholder.style.display = "none";
	else 
		searchPlaceholder.style.display = "block"
});