export{}

const num = Math.round(Math.random() * 100);
console.log(`numの値: ${num}`);
if(num > 50) {
	console.log("50より大きい");
} else {
	console.log("50以下");
}
console.log("処理終了");
