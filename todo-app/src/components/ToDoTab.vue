<template>
<div class="tab-area">
  <button class="tab-btn" id="all"
          @click="filterTodos('all')">
    All</button>
  <button class="tab-btn" id="current"
          @click="filterTodos(false)">
    Current</button>
  <button class="tab-btn" id="completed"
          @click="filterTodos(true)">
    Completed</button>
</div>
</template>

<script>
export default {
  name: "ToDoTab",
  methods: {
    filterTodos(value) {
      this.$emit('filter-todo', value);
    },
  }

}
</script>

<style scoped>
.tab-area{
  display: flex;
  justify-content: flex-start;
  margin: 15px 0;
}
.tab-btn{
  border-bottom: 1px solid orange;
  padding: 5px 15px;
  color: #383636;
}
.tab-btn:hover {
  border-bottom: 5px solid orange;
  color: black;
  padding-bottom: 1px;
}



</style>