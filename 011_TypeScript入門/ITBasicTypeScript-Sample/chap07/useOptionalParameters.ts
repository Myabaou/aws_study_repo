export{}

function showCircumference(radius: number, pi?: number) {
	if(pi == undefined) {
		pi = 3.14;
	}
	const circumference = 2 * pi * radius;
	console.log(`半径${radius}の円周の長さ: ${circumference}`);
}

showCircumference(4, 3.142);
showCircumference(8);
