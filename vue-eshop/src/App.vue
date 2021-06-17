<template>
  <div id="app">
    <Header @filter-goods="filterGoods" @toggle-cart="toggleCartVisibility"/>
    <GoodsList :goods="filteredGoods" @add-to-cart="addToCart" />
    <Cart :cartGoods="cartGoods" :isVisibleCart="isVisibleCart" @delete-from-cart="deleteFromCart" @clear-cart="clearCart"/>
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
const API_URL = 'http://localhost:3000'


export default {
  name: 'App',
  components: {
    Header,
    GoodsList,
    Cart,

  },
  data: () => ({
    goods: [],
    cartGoods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: false,
  }),
  mounted() {
  this.getGoods();
  this.getCart();
  },
  methods: {
    addToCart(item){
      this.makePOSTRequest(`${API_URL}/addToCart`, item)
      .then(() => this.getCart())
    },
    deleteFromCart(item){
      this.makeDeleteRequestOne(`${API_URL}/deleteFromCart`, item)
          .then(() => this.getCart())
    },
    clearCart(){
      this.makeDeleteRequestAll(`${API_URL}/clearCart`)
      .then(() => this.getCart())
    },
    makeGETRequest(url) {
      return fetch(url)
          .then((data) => data.json())
    },
    makePOSTRequest(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
          .then((data) => data.json())
    },
    makeDeleteRequestOne(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
          .then((data) => data.json())
    },
    makeDeleteRequestAll(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    },
    getGoods(){
      this.makeGETRequest(`${API_URL}/catalogData`)
          .then((data) => {
                this.goods = data;
                this.filteredGoods = data;
      })
    },
    getCart(){
      this.makeGETRequest(`${API_URL}/cartData`)
        .then((data) => {
          this.cartGoods = data;
        })
    },
    filterGoods(value){
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCartVisibility(){
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  margin: 0;
}
button {
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  background-color: inherit;
  border: transparent;
}
.goods-container {
  margin: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goods-item {
  border: 1px solid #000000;
  padding: 20px;
  width: 200px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
}

.btn {
  margin-bottom: 15px;
  margin-top: auto;
  padding: 5px;
}
.btn:hover, .cart-button:hover {
  color: white;
  background-color: black;
}
</style>
