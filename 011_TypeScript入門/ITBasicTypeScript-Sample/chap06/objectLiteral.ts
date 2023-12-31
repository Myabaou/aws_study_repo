export{}

const personalData =
{
	name: "Tomoko",
	age: 19,
	height: 155.4,
	weight: 53.1
};
// const personalData =
// {
// 	"name": "Tomoko",
// 	"age": 19,
// 	"height": 155.4,
// 	"weight": 53.1
// };
console.log(`${personalData.name}さんの情報`);
for(const key in personalData) {
	console.log(`${key}の値: ${personalData[key]}`);
}
personalData.weight = 54.3;
console.log(`体重が${personalData["weight"]}に変化した`);
