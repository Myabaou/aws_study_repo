export{}

interface Calc2Param {
	name: string;
	(num1: number, num2: number): number;
}

function useCalc2Param(calc2Param: Calc2Param) {
	const ans = calc2Param(5, 4);
	console.log(`${calc2Param.name}の実行結果: ${ans}`);
}

const multiplication: Calc2Param = 	function(num1: number, num2: number): number {
			return num1 * num2;
}
multiplication.name = "かけ算";

useCalc2Param(multiplication);
