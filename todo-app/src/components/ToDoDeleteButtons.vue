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
  padding: 5px;
}
</style>