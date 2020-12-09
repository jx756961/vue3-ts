<template>
    <div>
        <input type="checkbox" @change="changeCheck">
        <span>{{item.id}}</span>
        <button @click="removeTodo(item.id)">删除</button>
        <span>{{item.content}}</span>
        <button v-if="item.status !== FINSHED" @click="setStatus(item.id)">{{item.status === DOING ? '正在做' :'将要操作'}}
        </button>
    </div>
</template>

<script lang="ts">
    import {defineComponent, PropType, computed, ref} from "vue"
    import {ITodo, TODO_STATUS} from "@/utils/typings";

    export default defineComponent({
        name: 'TodoItem',
        props: {
            item: Object as PropType<ITodo>
        },
        setup(props, {emit}) {
            const statusState = {
                FINSHED: TODO_STATUS.FINSHED,
                WILLDO: TODO_STATUS.WILLDO,
                DOING: TODO_STATUS.DOING
            }
            // switch (props.item.status) {
            //   case TODO_STATUS.FINSHED:
            //
            // }
            const changeCheck = ((e: Event) => {
                console.log(e.target)
            })

            const removeTodo = (id: number): void => {
                emit('removeTodo', id)
            }

            const setStatus = (id: number): void => {
                emit('setStatus', id)
            }

            const setDoing = (id: number): void => {
                emit('setDoing', id)
            }

            return {
                ...statusState,
                removeTodo,
                setDoing,
                setStatus,
                changeCheck

            }
        }

    })

</script>
<style scoped>
    span {
        display: inline-block;
        margin-right: 50px;
    }
</style>
