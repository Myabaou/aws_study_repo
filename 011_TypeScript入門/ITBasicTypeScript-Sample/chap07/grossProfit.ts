export{}

function showGrossProfit(sales: number, ratio: number = 0.7) {
	const grossProfit = Math.round(sales * ratio * 0.9);
	console.log(`${sales}の粗利: ${grossProfit}(粗利率${ratio})`);
}

showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
