import { IState, ITodo } from '@/utils/typings';
import { Commit } from 'vuex';
import {SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS} from './actionType';

interface ICtx {
    commit: Commit;
    state: IState
}

export default {
    [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo) // 这里使用同名的 actions 和 mutations 方式来定义
    },
    [SET_TODO_LIST]({ commit, state }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList) // 这里使用同名的 actions 和 mutations 方式来定义
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO, id)
    },
    [SET_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_STATUS, id)
    }
}
