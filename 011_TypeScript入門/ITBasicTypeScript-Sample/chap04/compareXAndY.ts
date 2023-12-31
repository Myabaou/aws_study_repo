export{}

const x = Math.round(Math.random() * 10);
const y = Math.round(Math.random() * 10);
console.log(`xの値は${x}でyの値は${y}`);
if(x == y) {
	console.log("同じ!");
}else {
	console.log("違う!");
}
