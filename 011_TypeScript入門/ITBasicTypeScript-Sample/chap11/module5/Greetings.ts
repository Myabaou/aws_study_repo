export default class Greetings {
	name: string = "";

	constructor(name: string) {
		this.name = name;
	}

	sayHello() {
		console.log(`${this.name}さん、こんにちは。`)
	}
}
