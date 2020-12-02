<template>
  <div class="wrapper">
    vue3.0 + typescript
    <TodoList />
    <TodoInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList/index.vue'; // ts 默认读取的是index.ts 文件, 所以这里的文件夹要把文件的 index.vue写全
import TodoInput from './components/TodoInput/index.vue';

export default defineComponent({
  components: {
    TodoInput,
    TodoList
  }
});
</script>

<style>

</style>
