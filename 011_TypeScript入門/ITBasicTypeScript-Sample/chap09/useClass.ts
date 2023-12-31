export{}

class Student {
	name: string = "";
	english: number = 0;
	math: number = 0;
	japanese: number = 0;
}

const taro = new Student();
console.log(taro);
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 82;
taro.japanese = 85;
console.log(taro);
const hanako = new Student();
hanako.name = "松下花子";
hanako.english = 91;
hanako.math = 80;
hanako.japanese = 87;
console.log(hanako);
hanako.math = 82;
console.log(hanako);
