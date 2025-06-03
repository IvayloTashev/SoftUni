class Product {
    private static productCount: number = 0;
    readonly id: number;
    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        Product.productCount++
        this.id = Product.productCount
    }

    get name(): string {
        return this._name
    }

    set name(newName: string) {
        if (newName.length < 1) {
            throw new Error('Name must be at least 1 character');
        }

        this._name = newName;
    }

    get price(): number {
        return this._price
    }

    set price(newPrice: number) {
        if (newPrice <= 0) {
            throw new Error('Price must be greater than 0');
        }

        this._price = newPrice
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`
    }

}

class Inventory {
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products
    }

    addProduct(newProduct: Product): void {
        this._products.push(newProduct);
    }

    listProducts(): string {
        let res = ''

        this._products.map(product => {
            res += `${product.getDetails()}\n`
        });

        res += `Total products created: ${this._products.length}`

        return res
    }
}



const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
const product3 = new Product("PC", 5000);

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

console.log(inventory.listProducts());


// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
