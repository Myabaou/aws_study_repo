export{}

const year = Math.round(Math.random() * 120) + 1901;
if(year < 1912) {
	console.log(`${year}年は明治です。`);
} else if(year < 1926) {
	console.log(`${year}年は大正です。`);
} else if(year < 1989) {
	console.log(`${year}年は昭和です。`);
} else if(year < 2019) {
	console.log(`${year}年は平成です。`);
} else {
	console.log(`${year}年は令和です。`);
}
