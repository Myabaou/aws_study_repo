export{}

class Donuts {
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

class DonutsWithDrink extends Donuts {
	private _drinkName: string = "";
	private _drinkPrice: number = 0;

	constructor(name: string, price: number, quantity: number, drinkName: string, drinkPrice: number) {
		super(name, price, quantity);
		this._drinkName = drinkName;
		this._drinkPrice = drinkPrice;
	}

	get priceWithDrink() {
		return this.totalDonutsPrice + this._drinkPrice;
	}

	showOrder() {
		console.log(`ドーナツと${this._drinkName}とのセットで合計${this.priceWithDrink}円`);
	}
}

const donutsSet = new DonutsWithDrink("オールドファッション", 120, 3, "アイスコーヒー", 150);
donutsSet.showOrder();
