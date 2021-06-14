<template>
  <main>
    <div class="goods-container goods-list" v-if="goods.length">
      <div v-for="item in goods" :key="item.id_product" class="goods-item">
        <h3>{{item.product_name}}</h3>
        <p>{{item.price}}</p>
        <button class="add-to-cart btn" data-id_product="{{item.id_product}}">В корзину</button>
      </div>
    </div>
    <p v-else class="empty-catalog">Каталог пуст</p>
  </main>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<style scoped>
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
</style>