/**
 * 创建 hooks 需要的操作 ， 通过 return 导出
 * @returns {{removeTodo: removeTodo, setTodoList: setTodoList, setDoing: setDoing, setTodo: setTodo, setStatus: setStatus}}
 */
import {ITodo, TODO_STATUS} from "@/utils/typings";
import {Store} from "vuex";
import {SET_TODO, SET_TODO_LIST} from "@/store/actionType";

export interface IUserTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}


export function userTodo(Istore: Store<any>): IUserTodo {
    const store: Store<any> = Istore
    const { setLocalList, getLocalList }: IUseLocalStoreage = useLocalStoreage()
    const todoList: ITodo[] = getLocalList()
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo)
        setLocalList(store.state.list)
        console.log(store)
    }

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
    }

    function removeTodo() {

    }

    function setStatus() {

    }

    function setDoing() {

    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

// 数据存本地 useLocalStorage

interface IUseLocalStoreage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;

}


export function useLocalStoreage(): IUseLocalStoreage {

    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    return  {
        getLocalList,
        setLocalList
    }
}
