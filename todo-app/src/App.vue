<template>
  <div id="app">
    <ToDoHeader/>
    <ToDoInput @add-todo="addTodo"/>
    <ToDoTab @filter-todo="filterTodos"/>
    <ToDoList :todoList="filteredTodos"/>
  </div>
</template>

<script>


import ToDoHeader from "@/components/ToDoHeader";
import ToDoList from "@/components/ToDoList";
import ToDoInput from "@/components/ToDoInput";
import ToDoTab from "@/components/ToDoTab";
export default {
  name: 'App',
  components: {
    ToDoInput,
    ToDoList,
    ToDoHeader,
    ToDoTab,
  },
  data: () => ({
    todoList: [
        {title: 'Clean Windows', id:12345, done:false},
        {title: 'Buy Apples', id:12385, done:false},
        {title: 'Wash Dog', id:12379, done:false},
    ],
    filteredTodos: [],

  }),
  methods: {
    addTodo(item){
      this.todoList.push(item);
    },
    filterTodos(value = 'all'){
      if (value === 'all'){
        this.filteredTodos = this.todoList;
      } else {
        this.filteredTodos = this.todoList.filter(item => item.done === value);
      }
    }

  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
