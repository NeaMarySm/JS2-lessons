<template>
  <main>
    <div class="goods-container goods-list" v-if="goods.length">
      <div v-for="item in goods" :key="item.id_product" class="goods-item">
        <h3>{{item.product_name}}</h3>
        <p>{{item.price}}</p>
        <button class="add-to-cart btn" data-id_product="{{item.id_product}}" @click="onClick(item)">В корзину</button>
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
  },
  methods: {
    onClick(item){
      this.$emit('add-to-cart', item);
    }
  }
}
</script>

<style scoped>

.empty-catalog{
  text-align: center;
}
</style>