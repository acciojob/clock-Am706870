//your JS code here. If required.
function updateTimer() {
	let newTimer = document.getElementById("timer");
	const currentDate = new Date();
	let setTimer = currentDate.toLocaleString();

	newTimer.textContent = setTimer;
}
setInterval(updateTimer(),1000);
updateTimer();