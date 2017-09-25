(function stopWatch() {
	"use strict";

	var time = 0, duration = 1000, clockTime = null;

	function startTime()
	{
		if (!clockTime) {
			clockTime = setInterval(showTime, duration);  // every minute
		}
	}

	function stopTime()
	{
		clearInterval(clockTime);
		clockTime = null;
	}

	function resetTime() {
		stopTime();
		time = 0;
		showTime();
	}

	function formatTime()
	{
		if (clockTime) {
			time += duration;
		}
		var seconds = Math.floor(time / 1000 % 60);
		var minutes = Math.floor(time / (60 * 1000) % 60);
		var hours 	= Math.floor(time / (60 * 60 * 1000));

		return addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
	}

	function showTime()
	{
		get("time").innerHTML = formatTime();
	}

	function addZero(n)
	{
		return ('0' + n).slice(-2);
	}

	var get = function(id)
	{
		return document.getElementById(id);
	}

	get("start").addEventListener("click", startTime, false);
	get("stop").addEventListener("click", stopTime, false);
	get("reset").addEventListener("click", resetTime, false);

}());