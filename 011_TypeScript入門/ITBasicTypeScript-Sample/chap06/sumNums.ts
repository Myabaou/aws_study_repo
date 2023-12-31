export{}

const nums: number[] = [15, 36, 21, 48, 64, 59, 7];
let ans = 0;
for(const element of nums) {
	ans += element;
}
console.log(`足し算の答え: ${ans}`);
