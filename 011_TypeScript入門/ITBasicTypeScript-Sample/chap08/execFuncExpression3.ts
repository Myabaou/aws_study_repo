export{}

function showConcatName(f: (lastName: string, firstName: string) => string) {
	const result = f("田中", "太郎");
	console.log(result);
}

const func =  function(lastName: string, firstName: string): string {
	return `${lastName} ${firstName}`;
}
showConcatName(func);
