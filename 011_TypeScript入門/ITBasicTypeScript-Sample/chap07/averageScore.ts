export{}

function calcAverageScore(...scores: number[]): number {
	let total = 0;
	for(const score of scores) {
		total += score;
	}
	const average = total / scores.length;
	return average;
}

const averageNakata = calcAverageScore(87, 77, 89, 54, 90);
console.log(`中田さんの平均点: ${averageNakata}`);
const averageNakayama = calcAverageScore(68, 87, 74, 91, 69, 73, 85);
console.log(`中山さんの平均点: ${averageNakayama}`);
