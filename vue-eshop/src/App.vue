<template>
  <div id="app">
    <header class="header">
      <div class="search-form">
        <input v-model="searchLine" type="text" class="goods-search">
        <button @click="filterGoods" class="search-button btn" type="button">Искать</button>
      </div>
      <button class="cart-button" type="button" @click="toggleCartVisibility">Корзина</button>
    </header>
    <main>
      <div class="goods-container goods-list" v-if="filteredGoods.length">
        <div v-for="item in filteredGoods" :key="item.id_product" class="goods-item">
          <h3>{{item.product_name}}</h3>
          <p>{{item.price}}</p>
          <button class="add-to-cart btn" data-id_product="{{item.id_product}}">В корзину</button>
        </div>
      </div>
      <p v-else class="empty-catalog">Каталог пуст</p>
      <hr>
      <div v-show="isVisibleCart" class="cart-list">
        <div class="goods-container"></div>
        <button class="clear-cart btn">Очистить корзину</button>
      </div>
    </main>
  </div>
</template>

<script>
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'


export default {
  name: 'App',
  components: {

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
    filterGoods(){
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCartVisibility(){
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
  watch: {
    searchLine() {
      this.filterGoods();
    }
  }
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
.header {
  border: 1px solid #000;
  padding: 25px;
  margin: 0 25px 25px;
  display: flex;
  justify-content: space-between;
}
.goods-search,
.search-button {
  height: 30px;
}
.goods-search{
  margin-right: 15px;
  padding: 5px;
}
.cart-button {
  padding: 0px 30px;
  border-radius: 22px;
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
.empty-catalog{
  text-align: center;
}
.cart-list{
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  padding: 20px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 10%;
  left: 2%;
  background-color: white;
  overflow: auto;
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
