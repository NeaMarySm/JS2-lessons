const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const makeGETRequest = (url) => {
    return new Promise((res, rej) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    res(xhr.responseText);
                } else rej('error');
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    })
}
class GoodsItem {
    constructor(product_name, price, id_product) {
        this.product_name = product_name;
        this.price = price;
        this.id_product = id_product;
    }
    render() {
        return `<div class="goods-item">
                    <h3>${this.product_name}</h3>
                    <p>${this.price}</p>
                    <button class="add-to-cart btn" data-id_product="${this.id_product}">В корзину</button>
                </div>`;
    }
}

class GoodsList {
    _cart = new Cart()
    constructor() {
        this.goods = [];
    }
    fetchGoods(url, cb) {
        makeGETRequest(url)
            .then((goods) => {
                this.goods = JSON.parse(goods);
            })
            .then(cb)
    }
    countTotalPrice(){
        return this.goods.reduce(((sum, current) => sum + current.price), 0);
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        this.addEventHandlers();
        console.log(this.countTotalPrice());
    }
    addEventHandlers(){
        document.querySelectorAll('.add-to-cart').forEach(item => {
            item.addEventListener('click', event => this.addToCart(event));
        })
    }
    addToCart(event){
        const id_prod = +event.target.dataset.id_product;
        const productToAdd = this.goods.find(item => item.id_product === id_prod);
        this._cart.addToCart(productToAdd);
    }
}

class Cart {
    constructor() {
        this.cartList = [];
    }
    addToCart(product){

        if (product) {
            const alreadyInCart = this.cartList.find(item => item.id_product === product.id_product);
            if (alreadyInCart) {
                alreadyInCart.quantity++;
            } else
                this.cartList.push({...product, quantity: 1});
        }
        this.render();
    }
    addEventHandlers(){
        document.querySelectorAll('.clr-item').forEach(item => {
            item.addEventListener('click', event => this.deleteItem(event));
        })
    }
    deleteItem(event){
        const id_prod = +event.target.dataset.id_product;
        const productToDelete = this.cartList.find(item => item.id_product === id_prod);
        if (productToDelete.quantity > 1) {
            productToDelete.quantity --;
        } else {
            const index = this.cartList.indexOf(productToDelete);
            this.cartList.splice(index, 1);
        }
        this.render();
    }
    countTotalPrice(){
        return this.cartList.reduce(((sum, current) => sum + current.price * current.quantity), 0);
    }
    render() {
        let listHtml = '';
        this.cartList.forEach(good => {
            const goodItem = new CartItem(good.product_name, good.price, good.id_product, good.quantity);
            listHtml += goodItem.render();
        });
        document.querySelector('.cart-list').innerHTML = listHtml;
        this.addEventHandlers();
        console.log(this.countTotalPrice());
    }
}

class CartItem extends GoodsItem{
    constructor(product_name, price, id_product, quantity) {
        super(product_name, price, id_product);
        this.quantity = quantity;
    }
    render() {
        return `<div class="goods-item">
                    <h3>${this.product_name}</h3>
                    <p>${this.price}</p>
                    <p>${this.quantity}</p>
                    <button class="clr-item btn" data-id_product="${this.id_product}">Удалить</button>
                </div>`;
    }
    addOne(){}

    removeOne(){}
}


const list = new GoodsList();
list.fetchGoods(`${API_URL}/catalogData.json`,() => {
    list.render();
});
