<template>
  <div id="app">
    <ToDoHeader/>
    <ToDoInput @add-todo="addTodo"/>
    <ToDoTab @filter-todo="filterTodos"/>
    <ToDoList :todoList="filteredTodos" @delete-item="deleteTodo"/>
    <ToDoDeleteButtons @delete-all="deleteAll" @delete-done="deleteDone"/>
  </div>
</template>

<script>
import ToDoHeader from "@/components/ToDoHeader";
import ToDoList from "@/components/ToDoList";
import ToDoInput from "@/components/ToDoInput";
import ToDoTab from "@/components/ToDoTab";
import ToDoDeleteButtons from "@/components/ToDoDeleteButtons";
const API_URL = 'http://localhost:3000'
export default {
  name: 'App',
  components: {
    ToDoDeleteButtons,
    ToDoInput,
    ToDoList,
    ToDoHeader,
    ToDoTab,
  },
  data: () => ({
    todoList: [
        // {title: 'Clean Windows', id:12345, done:false},
        // {title: 'Buy Apples', id:12385, done:false},
        // {title: 'Wash Dog', id:12379, done:false},
    ],
    filteredTodos: [],

  }),
  mounted() {
    this.getTodoList();
    this.filterTodos();
  },
  methods: {
    makeGETRequest(url) {
      return fetch(url)
          .then((data) => data.json())
    },
    makePOSTRequest(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
          .then((data) => data.json())
    },
    makeDeleteRequest(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
          .then((data) => data.json())
    },
    getTodoList(){
      this.makeGETRequest(`${API_URL}/todoList`)
        .then(data => {
          this.todoList = data;
          this.filteredTodos = data;
        })

    },
    addTodo(item){
      this.makePOSTRequest(`${API_URL}/addToList`, item)
      .then(() => this.getTodoList());

    },
    filterTodos(value = 'all'){
      if (value === 'all'){
        this.filteredTodos = this.todoList;
      } else {
        this.filteredTodos = this.todoList.filter(item => item.done === value);
      }
    },
    deleteTodo(item){
      this.makeDeleteRequest(`${API_URL}/deleteTodo`, item)
        .then(() => this.getTodoList())

    },
    deleteAll(){
      this.makeDeleteRequest(`${API_URL}/deleteAll`)
          .then(() => this.getTodoList())
    },
    deleteDone(){
      this.todoList = this.todoList.filter(item => item.done !== true);
      this.filterTodos();
    },

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
  padding: 15px;
}
button {
  border: none;
  background-color: inherit;
  padding: 5px;
  cursor: pointer;
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
