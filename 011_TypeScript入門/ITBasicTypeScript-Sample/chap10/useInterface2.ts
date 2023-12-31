export{}

interface Calc2Param {
	name: string;
	calc(num1: number, num2: number): number;
}

function useCalc2Param(calc2Param: Calc2Param) {
	const ans = calc2Param.calc(5, 4);
	console.log(`${calc2Param.name}の実行結果: ${ans}`);
}

const multiplication: Calc2Param =
{
	name: "かけ算",
	calc(num1: number, num2: number): number {
		return num1 * num2;
	}
}

useCalc2Param(multiplication);
