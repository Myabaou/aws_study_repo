export{}

const score = Math.round(Math.random() * 100);
console.log(`点数は${score}点です。`);
if(score >= 60) {
	console.log("C判定");
} else if(score >= 70) {
	console.log("B判定");
} else if(score >= 80) {
	console.log("A判定");
} else {
	console.log("不合格");
}
console.log("判定終了");
