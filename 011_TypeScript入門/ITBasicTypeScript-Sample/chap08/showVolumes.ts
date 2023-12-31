export{}

function calcVolume(edge: number): number;
function calcVolume(width: number, height: number, depth: number): number;
function calcVolume(edge: number, height?: number, depth?: number): number {
	let volume = 0;
	if(height == undefined) {
		volume = edge ** 3;
	} else {
		volume = edge * height * depth;
	}
	return volume;
}

const volumeCube = calcVolume(4);
console.log(`一辺が4の立方体の体積: ${volumeCube}`);
const volumeCuboid = calcVolume(4, 5, 6);
console.log(`各辺の長さが4、5、6の直方体の体積: ${volumeCuboid}`);
