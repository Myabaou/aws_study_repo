export{}

const month = Math.round(Math.random() * 11) + 1;
switch(month) {
	case 3:
	case 4:
	case 5:
		console.log(`${month}月は春!`);
		break;
	case 6:
		console.log(`${month}月は梅雨!`);
		break;
	case 7:
	case 8:
	case 9:
		console.log(`${month}月は夏!`);
		break;
	case 10:
	case 11:
		console.log(`${month}月は秋!`);
		break;
	case 12:
	case 1:
	case 2:
		console.log(`${month}月は冬!`);
		break;
}
