<template>
  <main>
    <ul v-for="item in todoList" :key="item.id" class="todo-list">
      <ToDoItem :toDoItem="item" @delete-item="$emit('delete-item', item.id)"/>

    </ul>
  </main>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
export default {
  name: "ToDoList",
  components: {ToDoItem},
  props: {
    todoList: {
      type: Array,
      default: ()=>[],
    }
  }
}
</script>

<style scoped>
.todo-list{
  list-style-type: none;
}
</style>