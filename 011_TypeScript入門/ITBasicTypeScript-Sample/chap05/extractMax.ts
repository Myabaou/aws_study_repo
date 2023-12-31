export{}

let max = 0;
for(let i = 1; i <= 10; i++) {
	const num = Math.round(Math.random() * 100);
	console.log(`${i}個目の乱数: ${num}`);
	if(num > max) {
		max = num;
	}
}
console.log(`最大値: ${max}`);
