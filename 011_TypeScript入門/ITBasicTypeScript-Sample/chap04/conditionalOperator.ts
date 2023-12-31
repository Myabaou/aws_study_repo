export { }

const num = Math.round(Math.random() * 100);
console.log(`numの値: ${num}`);
if(num % 2 == 0 && num % 3 == 0) {
	console.log("2の倍数であり、しかも3の倍数");
} else {
	console.log("それ以外");
}
console.log("処理終了");
