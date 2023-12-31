export{}

let func = function(radius: number): number {
	return radius * radius * 3.14;
}
let result = func(5);
console.log(result);

func = (radius: number): number => {
	return radius * radius * 3.14;
}
result = func(5);
console.log(result);

func = (radius: number): number => {
	return radius * radius * 3.14;
}
result = func(5);
console.log(result);

func = (radius: number): number => radius * radius * 3.14;
result = func(5);
console.log(result);

func = (radius) => radius * radius * 3.14;
result = func(5);
console.log(result);

func = radius => radius * radius * 3.14;
result = func(5);
console.log(result);

const func2 = (num: number): void => console.log(`引数は${num}です`);
func2(10);

const func3 = () => 4 * 4* 3.14;
result = func3();
console.log(result);
