export{}

class BodyMass {
	name: string = "";
	weight: number = 0;
	height: number = 0;

	constructor(name: string, height: number, weight: number) {
		this.name = name;
		this.height = height;
		this.weight = weight;
	}

	showBMI() {
		let bmi = this.weight / (this.height/100) ** 2;
		bmi = Math.round(bmi * 10) / 10;
		console.log(`${this.name}さんのBMI値: ${bmi}`);
	}
	
	showIdealWeight() {
		let idealWeight = 22 *  (this.height/100) ** 2;
		idealWeight = Math.round(idealWeight);
		console.log(`${this.name}さんの理想体重: ${idealWeight}kg`);
	}
}

const nakatani = new BodyMass("中谷和弘", 171.4, 68.4);
nakatani.showBMI();
nakatani.showIdealWeight();
