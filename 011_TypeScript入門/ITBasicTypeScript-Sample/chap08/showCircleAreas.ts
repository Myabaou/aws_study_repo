export{}

const radiusList = [1, 3, 5, 7, 9];
radiusList.forEach(
	function(currentValue: number, index: number, array: number[]) {
		const area = currentValue * currentValue * 3.14;
		console.log(`半径${currentValue}の円の面積: ${area}`);
	}
);
