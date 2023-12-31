export{}

function calcAverage3Score(score1: number, score2: number, score3: number): number {
	const average = (score1 + score2 + score3) / 3;
	return average;
}

const nakataScores = [87, 77, 89] as const;
const averageNakata = calcAverage3Score(...nakataScores);
console.log(`中田さんの平均点: ${averageNakata}`);
const nakayamaScores = [68, 87, 74] as const;
const averageNakayama = calcAverage3Score(...nakayamaScores);
console.log(`中山さんの平均点: ${averageNakayama}`);
