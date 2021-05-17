class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    countTotalPrice(){
        return this.goods.reduce(((sum, current) => sum + current.price), 0);
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        console.log(this.countTotalPrice());
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

class Cart {
    constructor() {
        this.cartList = [];
    }
    addToCart(){}
    clearCart(){}
    countCartPrice(){}
    getCartLength(){}
    render(){}
}

class CartItem extends GoodsItem{
    constructor(title, price, quantity) {
        super(title);
        super(price);
        this.quantity = quantity;
    }
    render() {
        return `<div class="cart-item"><h3>${this.title}</h3><p>${this.price}</p><p>${this.quantity}</p></div>`;
    }
}
