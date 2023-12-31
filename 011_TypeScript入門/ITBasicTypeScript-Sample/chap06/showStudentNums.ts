export{}

const studentNums: {[key:string]: number} =
{
	"い": 35,
	"ろ": 36,
	"は": 37,
	"に": 34,
	"ほ": 36
};
for(const key in studentNums) {
	console.log(`${key}組の人数: ${studentNums[key]}`);
}
