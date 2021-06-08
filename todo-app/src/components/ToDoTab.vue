<template>
<div class="tab-area">
  <input type="radio" name="tab" class="tab-radio" id="all" @click="filterTodos('all')" checked>
  <label for="all">All </label>
  <input type="radio" name="tab" class="tab-radio" id="current" @click="filterTodos(false)">
  <label for="current">Current </label>
  <input type="radio" name="tab" class="tab-radio" id="completed" @click="filterTodos(true)">
  <label for="completed">Completed </label>
</div>
</template>

<script>
export default {
  name: "ToDoTab",
  // props: {
  //   todoList: {
  //     type: Array,
  //     default: [],
  //   }
  // },
  methods: {
    filterTodos(value) {
      this.$emit('filter-todo', value);
    }
  }

}
</script>

<style scoped>
.tab-area{
  display: flex;
  justify-content: flex-start;
}
.tab-radio{
  padding: 5px;
}


</style>