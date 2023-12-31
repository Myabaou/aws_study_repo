export{}

const nameList: string[] = ["中田", "田村", "村井", "井上", "上田"];
console.log(nameList);
nameList[4] = "上野";
nameList[5] = "野宮";
console.log(nameList);
console.log(`インデックス${6}: ${nameList[6]}`);
nameList[8] = "宮本";
console.log(nameList);
