export{}

interface Emp {
	name: string;
	wage: number;
	hours: number;
}

function showTotalWage(emp: Emp) {
	const total = emp.wage * emp.hours;
	console.log(`${emp.name}さんの支給額: ${total}円`);
}

const keisuke: Emp =
{
	name: "和田圭佑",
	wage: 1150,
	hours: 105
}

showTotalWage(keisuke);
