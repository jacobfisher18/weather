//openweathermap key: 4add38453c704df46ec2b390f9e132fd
var date = new Date();

function dayOfWeekAsString(dayIndex) {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex];
}

function displayWeatherIn(city) {
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=4add38453c704df46ec2b390f9e132fd";
	$.getJSON(url, function(data) {
		var temp = data.main.temp;
		$('.today').text(temp + "°F");
	});
}

function displayForecastIn(city) {
	var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=4add38453c704df46ec2b390f9e132fd";
	$.getJSON(url, function(data) {
		$('.forecast1').text("Tomorrow : " + data.list[1].main.temp); date.setDate(date.getDate() + 1);
		$('.forecast2').text(dayOfWeekAsString(date.getDay()) + ": " + data.list[2].main.temp); date.setDate(date.getDate() + 1);
		$('.forecast3').text(dayOfWeekAsString(date.getDay()) + ": " + data.list[3].main.temp); date.setDate(date.getDate() + 1);
		$('.forecast4').text(dayOfWeekAsString(date.getDay()) + ": " + data.list[4].main.temp); date.setDate(date.getDate() + 1);
		$('.forecast5').text(dayOfWeekAsString(date.getDay()) + ": " + data.list[5].main.temp); date.setDate(date.getDate() + 1);
	});	
}

function submitForm() {
	date = new Date();
	var city = document.getElementById('city').value;
	displayWeatherIn(city);
	displayForecastIn(city);
	$(".forecasts").css({"top": "50%"})
	$("#inputWrapper").css({"top": "-150px"})
}

$("#city").keyup(function(event){
    if(event.keyCode == 13){
        $("#sub").click();
        $("#city").blur();
    }
});