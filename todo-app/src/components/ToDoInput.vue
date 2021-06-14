<template>
  <form @submit.prevent="onSubmit(toDoValue)" class="form">
    <input type="text" class="todo-input" v-model="toDoValue">
    <button type="submit" class="add-btn">Add TODO</button>
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
.form {
  margin-bottom: 25px;
  display: flex;
  justify-content: flex-start;
}
.todo-input{
  padding: 2px 5px;
  width: 50%;

}
.add-btn{
  padding: 5px 15px;
  color: #383636;
  margin-left: 5px;
}
.add-btn:hover {
  border-bottom: 5px solid orange;
  color: black;
  padding-bottom: 0;

}

</style>