<template>
  <div class="button-area">
    <button class="delete-btn" @click="$emit('delete-done')">Delete completed</button>
    <button class="delete-btn" @click="$emit('delete-all')">Delete all</button>
  </div>

</template>

<script>
export default {
  name: "ToDoDeleteButtons"
}
</script>

<style scoped>
.button-area{
  padding: 15px;
  display: flex;
  justify-content: flex-end;
}
.delete-btn{
  padding: 5px 15px;
  color: #383636;
}
.delete-btn:hover {
  border-bottom: 5px solid orange;
  color: black;
  padding-bottom: 0;
}
</style>