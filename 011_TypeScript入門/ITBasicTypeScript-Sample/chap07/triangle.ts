export{}

function showTriangleArea(base: number, height: number) {
	const area = base * height / 2;
	console.log(`底辺${base}で高さ${height}の面積は${area}`);
}

showTriangleArea(25, 15);
