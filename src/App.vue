<template>
  <div class="wrapper">
    vue3.0 + typescript
    <TodoList :todoList="todoList"/>
    <TodoInput />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import TodoList from './components/TodoList/index.vue'; // ts 默认读取的是index.ts 文件, 所以这里的文件夹要把文件的 index.vue写全
import TodoInput from './components/TodoInput/index.vue';
import {useLocalStoreage} from "@/utils/hooks.ts";
import {ITodo} from "@/utils/typings";
import {SET_TODO_LIST} from "@/store/actionType";
import { useStore, Store } from 'vuex';

export default defineComponent({
  components: {
    TodoInput,
    TodoList
  },
  setup(props) {
    const store: Store<any> = useStore()
    const { getLocalList } = useLocalStoreage()
    const todoList: ITodo[] = getLocalList()

    onMounted(()=>{
      store.dispatch(SET_TODO_LIST, todoList)
      console.log(store.state.list)
    })

    return {
      todoList: computed(()=> store.state.list) // 想要响应式返回 store 数据需要使用 computed 计算数据
    }
  }
});
</script>

<style>

</style>
