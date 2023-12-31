export{}

const func =  function(lastName: string, firstName: string): string {
	return `${lastName} ${firstName}`;
}

const result = func("田中", "太郎");
console.log(result);
