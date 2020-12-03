// type 和 interface 区别在于 接口可以定义类型可以 extends 继承


/**
 * 定义 state 仓库的数据格式
 */

interface ITodo { // 定义 todo item 类型
    id: number;
    content: string;
    status: TODO_STATUS; // 这里使用枚举类型
}

interface IState { // 定义state 的接口格式
    list: ITodo[] // ITodo 数组
}

enum TODO_STATUS { // 枚举一般大写  逗号分隔
    WILLDO = 'willdo',
    DOING = 'doing',
    FINSHED = 'finshed'
}

/* export type { type 无法取枚举的值 所有不用这种方式
    ITodo,
    IState,
    TODO_STATUS
} */

export {
    ITodo,
    IState,
    TODO_STATUS,
}