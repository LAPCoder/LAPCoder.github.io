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
		var d = document.createElement("div");
		var i = document.createElement("img");
		var p = document.createElement("p");
		var t = document.createTextNode(inputUsr);
		d.classList.add("amessage");
		i.classList.add("profile profileUsr");
		d.classList.add("userQuack");
		i.src = "https://images.vectorhq.com/images/previews/fb4/tiger-face-clip-art-105756.png";
		i.alt = "😸";
		p.appendChild(t);
		d.appendChild(i);
		d.appendChild(p);
		divQuack.appendChild(d);

		var d2 = document.createElement("div");
		var i2 = document.createElement("img");
		var p2 = document.createElement("p");
		var t2 = document.createTextNode(returnSomeQuack());
		d2.classList.add("amessage");
		i2.classList.add("profile");
		d2.classList.add("quack");
		i2.src = "/images/duck.svg";
		i2.alt = "🦆";
		p2.appendChild(t2);
		d2.appendChild(i2);
		d2.appendChild(p2);
		divQuack.appendChild(d2);
		/*
		divQuack.innerHTML +=
			"<div class='amessage'>\
			<img class='profile profileUsr' src='https://images.vectorhq.com/images/previews/fb4/tiger-face-clip-art-105756.png' alt='😸' />\
			<p class='userQuack'>" +
			inputUsr +
			"</p></div>";
		divQuack.innerHTML +=
			"<div class='amessage'><img class='profile' src='/images/duck.svg' alt='🦆'/><p class='quack'>" +
			returnSomeQuack() +
			"</p></div>";*/
		inputUsr = "";
	}
}
