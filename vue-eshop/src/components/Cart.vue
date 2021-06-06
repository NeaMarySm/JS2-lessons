<template>
  <div v-show="isVisibleCart" class="cart-list">
    <div class="goods-container">
      <div v-for="item in cartGoods" :key="item.id_product" class="goods-item">
        <h3>{{item.product_name}}</h3>
        <p>{{item.price}}</p>
        <p>{{item.quantity}}</p>
        <button class="clear-cart btn" @click="onClickItem(item)">Удалить</button>
      </div>
    </div>
    <button class="clear-cart btn" @click="onClickCart">Очистить корзину</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    isVisibleCart: {
      type: Boolean,
      default: false,
    },
    cartGoods: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    onClickItem(item){
      this.$emit('delete-from-cart', item);
    },
    onClickCart(){
      this.$emit('clear-cart');
    },

  }

}
</script>

<style scoped>
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
</style>