export{}

function calcTriangleArea(base: number, height: number): number {
	const area = base * height / 2;
	return area;
}

const ans = calcTriangleArea(25, 15);
console.log(`底辺25で高さ15の面積は${ans}`);
