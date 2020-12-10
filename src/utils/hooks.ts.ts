/**
 * 创建 hooks 需要的操作 ， 通过 return 闭包导出操作函数
 * @returns {{removeTodo: removeTodo, setTodoList: setTodoList, setDoing: setDoing, setTodo: setTodo, setStatus: setStatus}}
 */
import {Store} from "vuex";
import {ITodo, TODO_STATUS} from "@/utils/typings";
import {SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_DOING, SET_STATUS} from "@/store/actionType";
import {watch} from 'vue';

export interface IUserTodo { // userTodo 函数格式的接口
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}


export function userTodo(Istore: Store<any>): IUserTodo {
    const store: Store<any> = Istore
    const { setLocalList, getLocalList }: IUseLocalStoreage = useLocalStoreage()

    watch(()=>{
        return store.state.list
    },(nV)=>{
        setLocalList(nV)
    })

    const todoList: ITodo[] = getLocalList()
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo)

    }

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
    }

    function removeTodo(id: number): void {
        console.log('removeTodo')
        store.dispatch(REMOVE_TODO, id)
    }

    function setStatus(id: number): void {
        console.log('setStatus')
        store.dispatch(SET_STATUS, id)
    }

    function setDoing(id: number): void {
        console.log('setDoing')
        store.dispatch(SET_DOING, id)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}


/**
 *  本地存储数据 useLocalStorage
 */

interface IUseLocalStoreage { // 定义数据函数格式的接口
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;

}


export function useLocalStoreage(): IUseLocalStoreage {

    function getLocalList(): ITodo[] {
        // JSON.parse() 处理json 数据时,如果 todoList 不存在为了避免报错使用字符串 [] 来设置默认值
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    function setLocalList(todoList: ITodo[]): void {
        // 本地存储字符串数据 JSON.stringify( json )
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    return  { // 闭包返回函数
        getLocalList,
        setLocalList
    }
}
