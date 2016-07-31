var button = document.querySelector("button");

button.addEventListener("click",function(){
	var inputCity = document.querySelector(".city").value;

	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.forecast.io/forecast/3946988c895d80a1dd73506cac0517f5/40.730610,-73.935242";
    
    //check status of fired request
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
	        var response = JSON.parse(xmlhttp.responseText);
	        myFunction(response);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(response){
		console.log(response);
	}
});
