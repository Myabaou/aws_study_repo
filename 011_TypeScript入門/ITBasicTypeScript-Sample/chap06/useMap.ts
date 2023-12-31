// export{}

const heightList = new Map();
heightList.set("Tomoko", 155.4);
heightList.set("Yumi", 162.3);
heightList.set("Ayaka", 157.9);
heightList.set("Rina", 170.2);
heightList.set("Yoshie", 153.7);

const ayakaHight = heightList.get("Ayaka");
console.log(`Ayakaの身長: ${ayakaHight}`);

for(const [key, value] of heightList) {
	console.log(`キーは${key}で値は${value}`);
}
