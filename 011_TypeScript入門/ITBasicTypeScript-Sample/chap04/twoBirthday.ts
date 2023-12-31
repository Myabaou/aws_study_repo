export{}

const birthA = Math.round(Math.random() * 68) + 1950;
const birthB = Math.round(Math.random() * 68) + 1950;
console.log(`Aさんの誕生年: ${birthA}`);
console.log(`Bさんの誕生年: ${birthB}`);
if(birthA >= 1989 && birthB >= 1989) {
	console.log("AさんもBさんも平成生まれ");
} else if(birthA >= 1989 || birthB >= 1989) {
	console.log("どちらかが平成生まれ");
} else {
	console.log("両方とも昭和生まれ");
}
