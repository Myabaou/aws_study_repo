export{}

class Greetings {
	// 名前のプロパティ。
	protected name: string = "";

	// コンストラクタ。名前を受け取りプロパティに格納する。
	constructor(name: string) {
		this.name = name;
	}

	// 「こんにちは」と表示するメソッド。
	sayHello() {
		console.log(`${this.name}さん、こんにちは。`)
	}
}

class HelloWithNice extends Greetings {
	sayHello() {
		super.sayHello();
		console.log("よろしくお願いします!");
	}
}

const saburo = new HelloWithNice("宮西三郎");
saburo.sayHello();
