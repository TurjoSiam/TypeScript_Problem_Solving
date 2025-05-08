
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
};



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredObj = items.filter((element) => element.rating >= 4);
    return filteredObj;
};



function concatenateArrays<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0) {
        return [];
    }
    else {
        const concatenatedArray = arrays[0].concat(...arrays.slice(1));
        return concatenatedArray;
    }
};



class Vehicle {
    private make: string;
    year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
};

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }

    getModel() {
        return `Model: ${this.model}`
    }
};



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    }
    return value * 2
};



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    const mostExpensiveProduct = products.reduce((previousProduct, currentProduct) => previousProduct.price < currentProduct.price ? currentProduct : previousProduct);
    return mostExpensiveProduct;
};
