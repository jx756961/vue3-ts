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
import { defineComponent } from "vue"

export default defineComponent({
    name: 'TodoInput'
    /* setup(props) {
        
    } */
    /* return {
        setTodoValue
    } */
})

</script>
<style scoped>
</style>