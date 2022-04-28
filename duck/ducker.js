/**
 * Copyright @LAPCoder
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function randomElementInArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnSomeQuack() {
	const quackList = ["Quack", "Quuuack", "Quaaack", "Quackkk", "Qu@ck", "Qua©k", "🦆", "🌊"];
	const endQuack = [".", "!", "?", "..."];
	const middleQuack = [". ", "! ", "? ", "... ", ", ", " "];
	var number = randomNumber(1, 5);
	var returnQuacks = "";

	for (var i = 0; i < number; i++) {
		returnQuacks +=
			randomElementInArray(quackList) + randomElementInArray(middleQuack);
	}
	returnQuacks +=
		randomElementInArray(quackList) + randomElementInArray(endQuack);
	return returnQuacks;
}

function sayQuack() {
	var divQuack = document.getElementById("messages");
	var inputUsr = document.getElementById("inputUsr").value;

	if (!inputUsr == "") {
		divQuack.innerHTML +=
			"<div class='amessage'><img class='profile profileUsr' src='https://images.vectorhq.com/images/previews/fb4/tiger-face-clip-art-105756.png' alt='😸' /><p class='userQuack'>" +
			inputUsr +
			"</p></div>";
		divQuack.innerHTML +=
			"<div class='amessage'><img class='profile' src='/images/duck.svg' alt='🦆'/><p class='quack'>" +
			returnSomeQuack() +
			"</p></div>";
		inputUsr = "";
	}
}
