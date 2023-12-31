export{}

const year = Math.round(Math.random() * 120) + 1901;
if(year < 1912) {
	const wareki = year - 1867;
	console.log(`${year}年は明治${wareki}年です。`);
} else if(year < 1926) {
	const wareki = year - 1911;
	console.log(`${year}年は大正${wareki}年です。`);
} else if(year < 1989) {
	const wareki = year - 1925;
	console.log(`${year}年は昭和${wareki}年です。`);
} else if(year < 2019) {
	const wareki = year - 1988;
	console.log(`${year}年は平成${wareki}年です。`);
} else {
	const wareki = year - 2018;
	console.log(`${year}年は令和${wareki}年です。`);
}
