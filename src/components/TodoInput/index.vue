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

    import {IUserTodo, userTodo} from "@/utils/hooks.ts"
    import {defineComponent, ref} from "vue"
    import {Store, useStore} from "vuex"

    export default defineComponent({
        name: 'TodoInput',
        setup(props) {
            const store: Store<any> = useStore()
            const todoValue = ref<string>('') // 这里使用泛型string类型推导
            const setTodoValue = (e: KeyboardEvent): void => { // 函数参数类型 KeyboardEvent, void 无返回值， 有返回值要定义返回值类型
                if (e.keyCode === 13 && todoValue.value.trim().length) {
                    // 这里提交数据到 store 仓库
                    console.log(todoValue.value)
                    const {setTodo}: IUserTodo = userTodo(store)
                    setTodo(todoValue.value)
                    todoValue.value = ''
                    /* 这里不要这样弄直接操作数据, 要形成一个方案集合。
                    hooks (钩子函数处理数据让他在各个组件都可以单独导入某些方法)
                    所有的自定义 hooks 应该是分文件的,按照使用类型区分。
                    目前demo 比较小就放在一个index 文件内使用

                    const store: Store<any> =  useStore()
                    const todoObj = <ITodo> {}
                    store.dispatch(SET_TODO, todoObj)

                    创建一个 hooks 函数集合
                    */

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
