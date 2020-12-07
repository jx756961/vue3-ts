/**
 * 创建 hooks 需要的操作 ， 通过 return 导出
 * @returns {{removeTodo: removeTodo, setTodoList: setTodoList, setDoing: setDoing, setTodo: setTodo, setStatus: setStatus}}
 */
import { ITodo, TODO_STATUS } from "@/utils/typings";
import { useStore, Store }  from "vuex";
import { SET_TODO } from "@/store/actionType";

export interface IUserTodo {
    setTodo: (value: string) => void;
    setTodoList: ()=> void;
    removeTodo: ()=> void;
    setStatus: ()=> void;
    setDoing: ()=> void;
}


export function userTodo(Istore: Store<any>): IUserTodo {
    const store: Store<any> = Istore
    function setTodo(value: string): void {
        const  todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo)
        console.log(store)
    }

    function setTodoList() {

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