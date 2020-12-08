<template>
  <div>
    <TodoItem
            v-for="item of todoList"
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TodoItem  from './Item.vue'
import {ITodo} from "@/utils/typings";
import {IUserTodo, userTodo} from "@/utils/hooks.ts";
import {useStore, Store} from 'vuex';

export default defineComponent({
  name: 'TodoList',
  props: {
    todoList: Array as PropType<ITodo[]> //使用 as 来断言数据的类型
  },
  components: { TodoItem },
  setup() {
    const store:Store<any> = useStore()
    const { removeTodo, setStatus, setDoing }:IUserTodo = userTodo(store)

    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }
})

</script>
<style scoped>
</style>
