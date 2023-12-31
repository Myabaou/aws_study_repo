export{}

function descOneself(name: string, message: string);
function descOneself(name: string, month: number, day: number);
function descOneself(name: string, msgOrMonth: number|string, day?: number) {
	let desc = `こんにちは、${name}です。`;
	if(typeof msgOrMonth == "string") {
		desc += msgOrMonth;
	} else {
		desc += `${msgOrMonth}月${day}日生まれです。`;
	}
	console.log(desc);
}

descOneself("江藤", "よろしくお願いします!");
descOneself("江藤", 6, 12);
