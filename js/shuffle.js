function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setTransDur(card_list, time) {
	for (var i=0; i<3; i++) {
		card_list[i].style.transitionDuration = time;
	}
}

function updateImage(card_list) {
	timerRun = false;
	document.getElementById("timer").style.animation = "";
	for (var i=0; i<2; i++) {
		card_list[i].children[0].src = card_list[i+1].children[0].src;
		card_list[i].children[1].children[0].innerHTML = card_list[i+1].children[1].children[0].innerHTML;
		card_list[i].children[1].children[1].innerHTML = card_list[i+1].children[1].children[1].innerHTML;
	}

	
	if (card_info) {
		document.getElementById("timer").innerHTML = card_info.time;
	}
	else {
		document.getElementById("timer").innerHTML = 10;
	}

	generateNewCard();
	document.getElementById("timer").style.background = 'rgba(30, 144, 255, 0.6)';

}

async function swap_cards(card_list) {
	for (var i=0; i<3; i++) {
		card_list[i].style.transitionDuration = '0.5s';
		card_list[i].style.width = '80%';
		card_list[i].children[0].style.height = "513px";
		card_list[i].style.opacity = '0';
	}

	document.getElementById('timer').style.opacity = 0

	await sleep(1000);
	updateImage(card_list);

	card_list[0].style.width = '65%';
	card_list[0].children[0].style.height = '416px';
	card_list[2].style.width = '65%';
	card_list[2].children[0].style.height = '416px';

	await sleep(100);

	document.getElementById('timer').style.opacity = 1
	setTransDur(card_list, '0.7s')
	card_list[0].style.opacity = '1';
	card_list[1].style.opacity = '1';
	card_list[2].style.opacity = '1';

	await sleep(700);

	setTransDur(card_list, '0.15s')
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getRandomInt(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function generateNewCard() {
	card_info = tasks[current_card_idx];
	card_list[2].children[0].src = 'images/image' + img_nums[current_card_idx] + '.jpg';
	$("#card_3").children()[0].children[1].children[0].innerHTML = card_info.name;
	$("#card_3").children()[0].children[1].children[1].innerHTML = card_info.task;
	current_card_idx++;	
}

card_list = [];
card_list.push($("#card_1").children()[0]);
card_list.push($("#card_2").children()[0]);
card_list.push($("#card_3").children()[0]);

current_card_idx = 0
tasks = shuffle(tasks)
img_nums = shuffle(img_nums)

card_info = false;