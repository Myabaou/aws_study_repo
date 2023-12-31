import fetch from "node-fetch";

async function receiveWeatherInfo(): Promise<string> {
	const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/onecall?lang=ja&lat=35&lon=135&appid=";
	const appId = "";
	const url = weatherinfoUrl + appId;
	const response = await fetch(url);
	const responseText = response.text();
	return responseText;
}

const promise = receiveWeatherInfo();
promise.then(
	function(responseText: string) {
		console.log(responseText);
	}
);
