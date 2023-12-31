export{}

const radiusList = [1, 3, 5, 7, 9];
radiusList.forEach(
	(currentValue: number, index: number, array: number[]) => console.log(`半径${currentValue}の円の面積: ${currentValue * currentValue * 3.14}`)
);
