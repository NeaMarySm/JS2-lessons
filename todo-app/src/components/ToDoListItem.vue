<template>
  <li class="todo-item">
    <input type="checkbox" v-model="toDoItem.done" :id="toDoItem.id">
    <label :for="toDoItem.id"><span class="todo-text" :class="{ completed: toDoItem.done}">{{toDoItem.title}}</span></label>
    <button @click="$emit('delete-item', toDoItem)" class="cross-btn">X</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    toDoItem: {
      type: Object,
      default: ()=>{},
    }
  },
}
</script>

<style scoped>
.todo-item {
  padding: 5px;
  box-shadow: 0px 0px 8px 2px rgba(225, 165, 0, 0.5);
  margin: 15px 5px 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.completed {
  text-decoration: line-through;
}
.cross-btn {
  font-weight: bold;
  color: #383636;
}
.cross-btn:hover {
  color: orange;
}

</style>