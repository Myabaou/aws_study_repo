export{}

const num = Math.round(Math.random() * 9) + 1;
console.log(`抽選の結果: ${num}番`);
switch(num) {
	case 1:
		console.log("金賞!");
		break;
	case 2:
		console.log("銀賞!");
		break;
	case 3:
		console.log("銅賞!");
		break;
	case 9:
		console.log("ブービー賞!");
		break;
	default:
		console.log("ティッシュ賞!");
		break;
}
