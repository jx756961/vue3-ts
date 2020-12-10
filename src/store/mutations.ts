import {IState, ITodo, TODO_STATUS} from '@/utils/typings';
import {REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST} from './actionType';

export default {
    [SET_TODO](state: IState, todo: ITodo): void {// 不需要返回值定义为 void
        // 这里不能使用unshift 方式 ， 因为前面监测的是watch 是 state.list，
        // 本地存储进不去 监测不到 unshift 这样的数据
        // state.list.unshift(todo) // 当前选项为一个对象 list 是一个数组, 把todo 放在数据的第一位
        state.list = [todo, ...state.list]
    },
    [SET_TODO_LIST](state:IState, todoList: ITodo[]): void {
        state.list = todoList
    },
    [REMOVE_TODO](state:IState, id: number): void {
        state.list = state.list.filter((val)=> val.id != id) // 移除当前id数据
    },
    [SET_STATUS](state: IState, id: number): void {
        state.list = state.list.map((val: ITodo)=>{
            if (val.id === id) {
                switch (val.status) {
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING:
                        Object.assign(val, { status: TODO_STATUS.FINSHED })
                        break
                    case TODO_STATUS.FINSHED:
                        val.status = TODO_STATUS.WILLDO
                        break
                    default:
                        break
                }
            }
            return val
        })
    },
    [SET_DOING](state: IState, id: number): void {
        state.list = state.list.map((val: ITodo)=>{
            if(val.id === id) {
                switch (val.status) {
                    case TODO_STATUS.WILLDO:
                        Object.assign(val, { status: TODO_STATUS.DOING })
                        break
                    case TODO_STATUS.DOING:
                        Object.assign(val, { status: TODO_STATUS.WILLDO })
                        break
                    default:
                        break
                }
            } else  {
                if( val.status === TODO_STATUS.DOING ) {
                    val.status = TODO_STATUS.WILLDO
                }
            }
            return val
        })
    }
}

