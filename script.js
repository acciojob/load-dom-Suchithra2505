//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
	var body = document.querySelector("body");
	if (body.hasChildNodes()){
		body.innerHTML = "";
	}
	 var st = document.createTextNode("DOM load success");
	body.appendChild(st);
});
						  