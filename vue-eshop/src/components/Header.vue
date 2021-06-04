<template>
  <header class="header">
    <div class="search-form">
      <input v-model="searchValue" type="text" class="goods-search">
      <button @click="$emit('filter-goods', searchValue)" class="search-button btn" type="button">Искать</button>
    </div>
    <button class="cart-button" type="button" @click="$emit('toggle-cart')">Корзина</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    searchValue: '',
  }),
  watch: {
    searchValue() {
      this.$emit('filter-goods', this.searchValue);
    }
  }
}
</script>

<style scoped>
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
</style>