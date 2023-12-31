export{}

for(let i = 1; i <= 5; i++) {
	const num1 = Math.round(Math.random() * 10);
	console.log(`分母の値: ${num1}`);
	if(num1 == 0) {
		console.log("次の分母の値まで処理をスキップします");
		continue;
	}
	for(let j = 1; j <= 5; j++) {
		const num2 = Math.round(Math.random() * 10);
		console.log(`分子の値: ${num2}`);
		const ans = num2 / num1;
		console.log(`割り算の結果: ${ans}`);
	}
}
