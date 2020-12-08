import { IState, ITodo } from '@/utils/typings';
import {SET_TODO, SET_TODO_LIST} from './actionType';

export default {
    [SET_TODO](state: IState, todo: ITodo): void {// 不需要返回值定义为 void
        state.list.unshift(todo) // 当前选项为一个对象 list 是一个数组, 把todo 放在数据的第一位
    },
    [SET_TODO_LIST](state:IState, todoList: ITodo[]): void {
        state.list = todoList
    }
}
