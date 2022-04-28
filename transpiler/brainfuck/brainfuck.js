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

function compile(brainfuckCode) {
	document.getElementById('codeBf').innerHTML = document.getElementById('codeBf').innerText;
	var output = "";
	var pointer = 0;
	var memory = [];
	var inputPointer = 0;
	var loopStack = [];
	var loopPointer = 0;
	var loopCount = 0;
	var exeTime = 0;

	const outputElem = document.getElementById("outputCode");
	const inputBf = document.getElementById("inputBf").value;

	for (var i = 0; i < brainfuckCode.length; i++) {
		exeTime++;
		var char = brainfuckCode[i];
		if (exeTime > 999999) {
			output = "<span style='color: red;'>Error</span>: Infinite loop detected.";
			outputElem.innerHTML = output;
			console.error(`Infinite loop detected.\nLoop execution time: ${exeTime}.`);
			console.info(`i: ${i}. char: ${char}. inputPointer: ${inputPointer}.\npointer: ${pointer}.\nmemory: ${memory}.\nloopStack: ${loopStack}.\nloopPointer: ${loopPointer}.\nloopCount: ${loopCount}.`);
			return;
		}
		for (var j = 0; j < memory.length; j++) {
			if (! memory[j]) {
				memory[j] = 0;
			}
			if (memory[j] > 255 || memory[j] < 0) {
				memory[j] = memory[j] % 256;
			}
			if (memory[j] < 0) {
				memory[j] += 256;
			}
		}

		switch (char) {
			case '>':
				pointer++;
				break;
			case '<':
				pointer--;
				break;
			case '+':
				if (memory[pointer] === undefined) {
					memory[pointer] = 0;
				}
				memory[pointer]++;
				break;
			case '-':
				if (memory[pointer] === undefined) {
					memory[pointer] = 0;
				}
				memory[pointer]--;
				break;
			case '.':
				if (memory[pointer] === undefined) {
					memory[pointer] = 0;
				}
				output += String.fromCharCode(memory[pointer]);
				break;
			case ',':
				if (memory[pointer] === undefined) {
					memory[pointer] = 0;
				}
				if (inputBf.length != 0) {
					memory[pointer] = inputBf.charCodeAt(inputPointer);
					if (inputBf.length >= inputPointer + 1)
						inputPointer++;
				}
				break;
			case '[':
				if (memory[pointer] === undefined) {
					memory[pointer] = 0;
				}
				if (memory[pointer] == 0) {
					var loopStart = i;
					var loopEnd = -1;
					loopCount++;
					for (var j = i + 1; j < brainfuckCode.length; j++) {
						if (brainfuckCode[j] == '[') {
							loopCount++;
						} else if (brainfuckCode[j] == ']') {
							loopCount--;
							if (loopCount == 0) {
								loopEnd = j;
								break;
							}
						}
					}
					if (loopEnd == -1) {
						output = "<span style='color: red;'>Error</span>: Unmatched loop start at " + loopStart;
						outputElem.innerHTML = output;
						throw "Unmatched loop start at " + loopStart;

					}
					i = loopEnd;
				}
				break;
			case ']':
				if (memory[pointer] === undefined) {
					memory[pointer] = 0;
				}
				if (memory[pointer] != 0) {
					var loopEnd = i;
					var loopStart = -1;
					loopCount++;
					for (var j = i - 1; j >= 0; j--) {
						//console.log(j);
						if (brainfuckCode[j] == ']') {
							loopCount++;
						} else if (brainfuckCode[j] == '[') {
							loopCount--;
							if (loopCount == 0) {
								loopStart = j;
								break;
							}
						}
					}
					if (loopStart == -1) {
						output = "<span style='color: red;'>Error</span>: Unmatched loop end at " + loopEnd;
						outputElem.innerHTML = output;
						throw "Unmatched loop end at " + loopEnd;
					}
					i = loopStart;
				}
				break;
			default:
				break;
		}
	}
	outputElem.innerText = output;
	console.info("Execution time: " + exeTime + "\nMemory: " + memory);
}
