import { money } from "../store/Types/type";

export class Model {
    Euro: money;
    constructor() {
        this.Euro = {
            basePrice: 0,
            openingPrice: 0,
            changePrice: 0,
            cashBuyingPrice: 0,
            cashSellingPrice: 0,
            ttSellingPrice: 0,
            ttBuyingPrice: 0,
        }
    }

    initMoney(input:money) {
        this.Euro.basePrice = input.basePrice;
        this.Euro.openingPrice = input.openingPrice;
        this.Euro.changePrice = input.changePrice;
        this.Euro.cashBuyingPrice = input.cashBuyingPrice;
        this.Euro.cashSellingPrice = input.cashSellingPrice;
        this.Euro.ttSellingPrice = input.ttSellingPrice;
        this.Euro.ttBuyingPrice = input.ttBuyingPrice;
    }

    getAll() {
        return this.Euro
    }
    
}

export default Model