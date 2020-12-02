<template>
  <div>
    <input 
    type="text"
    v-model="todoValue"
    @keyup="setTodoValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
    name: 'TodoInput',
     setup(props) {
        const todoValue = ref<string>('') // 这里使用泛型string类型推导
        const setTodoValue = (e: KeyboardEvent): void =>{ // 函数参数类型 KeyboardEvent, void 无返回值， 有返回值要定义返回值类型
          if(e.keyCode === 13 && todoValue.value.trim().length) {
             // 这里提交数据到 stor e 仓库
          } // todoValue.value 去掉前后空格如果是真才提交
        }
        return {
          todoValue,
          setTodoValue
        }
    }
})

</script>
<style scoped>
</style>