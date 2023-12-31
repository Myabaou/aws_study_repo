export{}

function calcRectangleArea(width: number, height?: number): number {
	if(height == undefined) {
		height = width;
	}
	return width * height;
}

const areaRectangle = calcRectangleArea(24, 11);
console.log(`縦11で横24の長方形の面積: ${areaRectangle}`);
const areaSquare = calcRectangleArea(13);
console.log(`一辺が13の正方形の面積: ${areaSquare}`);
