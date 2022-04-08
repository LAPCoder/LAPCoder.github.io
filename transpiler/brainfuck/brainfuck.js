function compile(brainfuckCode) {
	var output = "";
	var pointer = 0;
	var memory = [];
	var inputPointer = 0;
	var loopStack = [];
	var loopPointer = 0;
	var loopCount = 0;

	const outputElem = document.getElementById("outputCode");

	for (var i = 0; i < brainfuckCode.length; i++) {
		var char = brainfuckCode[i];
		switch (char) {
			case '>':
				pointer++;
				break;
			case '<':
				pointer--;
				break;
			case '+':
				memory[pointer]++;
				break;
			case '-':
				memory[pointer]--;
				break;
			case '.':
				output += String.fromCharCode(memory[pointer]);
				break;
			case ',':
				memory[pointer] = input[inputPointer++];
				break;
			case '[':
				if (memory[pointer] == 0) {
					var loopStart = i;
					var loopEnd = -1;
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
				if (memory[pointer] != 0) {
					var loopStart = i;
					var loopEnd = -1;
					for (var j = i - 1; j >= 0; j--) {
						if (brainfuckCode[j] == ']') {
							loopCount++;
						} else if (brainfuckCode[j] == '[') {
							loopCount--;
							if (loopCount == 0) {
								loopEnd = j;
								break;
							}
						}
					}
					if (loopEnd == -1) {
						output = "<span style='color: red;'>Error</span>: Unmatched loop end at " + loopStart;
						outputElem.innerHTML = output;
						throw "Unmatched loop end at " + loopStart;
					}
					i = loopEnd;

					loopStack[loopPointer++] = i;

					if (loopPointer > loopStack.length) {
						loopStack.length = loopPointer;
					}

					loopPointer--;

					i = loopStack[loopPointer];

					loopPointer--;

					loopCount = 0;

					i--;

					break;
				}
				break;
			default:
				break;
		}
	}
	outputElem.innerText = output;
}