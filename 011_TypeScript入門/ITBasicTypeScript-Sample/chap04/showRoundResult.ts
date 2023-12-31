export{}

const num = Math.round(Math.random() * 10);
console.log(`numの値: ${num}`);
if(num <= 4) {
	console.log("四捨五入すると0");
} else {
	console.log("四捨五入すると10");
}
