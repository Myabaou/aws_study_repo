export default class Donuts {
	private _name: string = "";
	private _price: number = 0;
	private _quantity: number = 0;

	constructor(name: string, price: number, quantity: number) {
		this._name = name;
		this._price = price;
		this._quantity = quantity
	}

	get totalDonutsPrice() {
		return this._price * this._quantity;
	}

	showOrder() {
		console.log(`${this._name}が${this._quantity}個で合計${this.totalDonutsPrice}円`);
	}
}
