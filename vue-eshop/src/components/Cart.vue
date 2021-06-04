<template>
  <div v-show="isVisibleCart" class="cart-list">
    <div class="goods-container"></div>
    <button class="clear-cart btn">Очистить корзину</button>
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