export{}

const year = Math.round(Math.random() * 70) + 1950;
if(year % 4 == 0) {
	console.log(`${year}年は閏年です。`);
} else {
	console.log(`${year}年は閏年ではありません。`);
}
