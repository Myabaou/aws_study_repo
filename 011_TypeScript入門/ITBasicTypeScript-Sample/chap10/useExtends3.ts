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

class MyDo extends Greetings {
	sayHello() {
		console.log(`${this.name}さん、まいど。`)
	}
}

const jiro = new MyDo("坂本次郎");
jiro.sayHello();
