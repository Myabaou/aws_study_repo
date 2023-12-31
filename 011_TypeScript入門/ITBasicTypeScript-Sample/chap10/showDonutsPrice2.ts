export{}

interface Donuts {
	name: string;
	price: number;
	quantity: number;
}

function showOrder(donuts: Donuts) {
	const price = donuts.price * donuts.quantity;
	console.log(`${donuts.name}が${donuts.quantity}個で合計${price}円`);
}

const myDonuts: Donuts =
{
	name: "チョコファッション",
	price: 140,
	quantity: 2
}

showOrder(myDonuts);
