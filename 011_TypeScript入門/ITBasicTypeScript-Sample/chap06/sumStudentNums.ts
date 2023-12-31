export{}

const studentNums: {[key:string]: number} =
{
	"い": 35,
	"ろ": 36,
	"は": 37,
	"に": 34,
	"ほ": 36
};
let ans = 0;
for(const key in studentNums) {
	ans += studentNums[key];
}
console.log(`学年の人数: ${ans}`);
