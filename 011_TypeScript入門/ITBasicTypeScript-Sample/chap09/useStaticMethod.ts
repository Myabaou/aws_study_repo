export{}

class Radius {
	static showCircumference(radius: number) {
		const circumference = 2 * 3.14 * radius;
		console.log(`半径${radius}の円周の長さ: ${circumference}`);
	}
}

Radius.showCircumference(5);
