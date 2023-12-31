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

class HelloWithMsg extends Greetings {
	msg: string = "";

	constructor(name: string, msg: string) {
		super(name);
		this.msg = msg;
	}

	sayHello() {
		super.sayHello();
		console.log(this.msg);
	}
}

const shiro = new HelloWithMsg("渡辺四郎", "いい天気ですね!");
shiro.sayHello();
