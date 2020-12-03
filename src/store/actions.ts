import { IState, ITodo } from '@/utils/typings';
import { Commit } from 'vuex';
import { SET_TODO } from './actionType';

interface ICtx {
    commit: Commit;
    state: IState
}

export default {
    [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo) // 这里使用同名的 actions 和 mutations 方式来定义
    }
}
