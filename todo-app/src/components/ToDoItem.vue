<template>
  <li class="todo-item">
    <input type="checkbox" v-model="toDoItem.done" :id="toDoItem.id">
    <label :for="toDoItem.id"><span class="todo-text" :class="{ completed: toDoItem.done}">{{toDoItem.title}}</span></label>
    <button @click="deleteItem">X</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  // data: () => ({
  //   value: false,
  // }),
  props: {
    toDoItem: {
      type: Object,
      default: ()=>{},
    }
  },
  methods: {
    deleteItem(){

    }

  }
}
</script>

<style scoped>
.todo-item {
  padding: 5px;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  margin: 15px 5px 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.completed {
  text-decoration: line-through;
}

</style>