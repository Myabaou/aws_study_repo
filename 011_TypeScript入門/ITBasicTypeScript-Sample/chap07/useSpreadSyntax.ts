export{}

function concatName(lastName: string, middleName: string, firstName: string): string {
	return `${lastName}・${middleName}・${firstName}`;
}

const name1 = concatName("田中", "ダニエル", "健三");
console.log(`結合結果: ${name1}`);
const nameArray = ["佐藤", "ミカエル", "健太"] as const;
const name2 = concatName(...nameArray);
console.log(`結合結果: ${name2}`);
