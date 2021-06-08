<template>
<div class="tab-area">
  <button class="tab-btn" id="all" @click="filterTodos('all')">All</button>
  <button class="tab-btn" id="current" @click="filterTodos(false)">Current</button>
  <button class="tab-btn" id="completed" @click="filterTodos(true)">Completed</button>
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
.tab-btn{
  border-bottom: 2px solid orange;
  margin-left: 15px;
}


</style>