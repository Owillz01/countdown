var showTime = document.getElementById("event");
var dDay = new Date("Oct 01, 2019 00:00:00").getTime();
var x = setInterval(function(){
var today = new Date().getTime();
var countDown = dDay - today;
var days = Math.floor(countDown / (1000*60*60*24));
var hours = Math.floor((countDown % (1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((countDown % (1000*60*60)) / (1000*60));
var seconds = Math.floor((countDown % (1000*60)) / 1000);
showTime.innerHTML = days +" days " + hours +" hrs " + minutes +" min " + seconds +" sec remaining";
	

}, 1000);


