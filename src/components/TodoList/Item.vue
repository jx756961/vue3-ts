<template>
  <div>
    <span>{{item.id}}</span>
    <span>{{item.content}}</span>
    <span>{{item.status}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import {ITodo, TODO_STATUS} from "@/utils/typings";

export default defineComponent({
    name: 'TodoItem',
    props: {
      item: Object as PropType<ITodo>
    },
    setup(props) {
      // switch (props.item.status) {
      //   case TODO_STATUS.FINSHED:
      //
      // }
    }

})

</script>
<style scoped>
  span{
    display: inline-block;
    margin-right: 50px;
  }
</style>
