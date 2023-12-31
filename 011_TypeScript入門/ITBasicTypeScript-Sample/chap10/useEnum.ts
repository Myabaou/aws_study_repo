export{}

enum Rgb {RED, GREEN, BLUE}
// enum Rgb {RED = 1, GREEN, BLUE}
// enum Rgb {RED = 10, GREEN = 20, BLUE = 30}
// enum Rgb {RED = "R", GREEN = "G", BLUE = "B"}

function showColorSelection(name: string, color: Rgb) {
	let colorStr = "赤";
	if(color == Rgb.GREEN) {
		colorStr = "緑";
	} else if(color == Rgb.BLUE) {
		colorStr = "青"
	}
	console.log(`${name}さんが選んだ色: ${colorStr}`);
}

showColorSelection("美智恵", Rgb.GREEN);
// showColorSelection("美智恵", Rgb.YELLOW);
