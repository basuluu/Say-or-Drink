timerRun = false;

async function timerStart(){
	timerRun = timerRun ? false : true;
	if (timerRun) {
		document.getElementById("timer").style.background = 'tomato';
		document.getElementById("timer").style.animation = "shadow-pulse 1s infinite";
	}
	else {
		document.getElementById("timer").style.background = 'rgba(30, 144, 255, 0.6)';
		document.getElementById("timer").style.animation = "";
	}

	while (timerRun){
		cur_value = parseInt(document.getElementById("timer").innerHTML);
		if (cur_value > 0) {
			cur_value--;
			document.getElementById("timer").innerHTML = cur_value;
			await sleep(1000);
		}
		else {
			document.getElementById("timer").style.background = 'black';
			// document.getElementById("timer").style.animation = "";
			document.getElementById("timer").style.animation = "";
			timerRun = false;
		}
	}
}

