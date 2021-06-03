<template>
  <div id="app">
    <Header @filter-goods="filterGoods" @toggle-cart="toggleCartVisibility"/>
    <GoodsList :goods="filteredGoods" />
    <Cart :isVisibleCart="isVisibleCart"/>
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'


export default {
  name: 'App',
  components: {
    Header,
    GoodsList,
    Cart,

  },
  data: () => ({
    goods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: false,
  }),
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`)
  },
  methods: {
    makeGETRequest(url) {
      fetch(url)
          .then((data) => data.json())
          .then((data) => {
            this.goods = data;
            this.filteredGoods = data;
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
