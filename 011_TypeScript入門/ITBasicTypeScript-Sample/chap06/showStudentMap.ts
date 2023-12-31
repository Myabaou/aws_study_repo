// export{}

const studentNums = new Map();
studentNums.set("い", 35);
studentNums.set("ろ", 36);
studentNums.set("は", 37);
studentNums.set("に", 34);
studentNums.set("ほ", 36);

for(const [key, value] of studentNums) {
	console.log(`${key}組の人数: ${value}`);
}
