export{}

class Student {
	name: string = "";
	english: number = 0;
	math: number = 0;
	japanese: number = 0;
}

function showScoresSum(student: Student) {
	const sum = student.english + student.math + student.japanese;
	console.log(`${student.name}の合計得点: ${sum}`);
}

const taro = new Student();
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 82;
taro.japanese = 85;
showScoresSum(taro);
const hanako = new Student();
hanako.name = "松下花子";
hanako.english = 91;
hanako.math = 80;
hanako.japanese = 87;
showScoresSum(hanako);
