<template>
  <form @submit.prevent="onSubmit(toDoValue)">
    <input type="text" class="todo-input" v-model="toDoValue">
    <button type="submit" >Add TODO</button>
  </form>
</template>

<script>
export default {
  name: "ToDoInput",
  data: () => ({
    toDoValue: '',
  }),
  methods: {
    onSubmit() {
      const newToDo = {
        title: this.toDoValue,
        id: Math.floor(Math.random()*10e4),
        done: false,
      }
      console.log(newToDo);
      this.$emit('add-todo', newToDo);
      this.toDoValue = '';
    }
  }


}
</script>

<style scoped>
.todo-input{
  padding: 2px 5px;
}
</style>