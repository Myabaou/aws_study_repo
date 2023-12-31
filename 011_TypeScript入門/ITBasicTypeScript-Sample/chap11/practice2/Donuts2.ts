export interface Donuts {
	name: string;
	price: number;
	quantity: number;
}

export function showOrder(donuts: Donuts) {
	const price = donuts.price * donuts.quantity;
	console.log(`${donuts.name}が${donuts.quantity}個で合計${price}円`);
}
