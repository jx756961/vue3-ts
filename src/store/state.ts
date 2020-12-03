import { IState } from '@/utils/typings';

/**
 * 分析数据格式
 * list： ITodo[]
 * 
 * ITodo 是由多个 listItem 对象组成的数组
 *  
 * listItem : {
 *  id: new Date().getTime() => number
 *  content: string,
 *  status:  FINSHED   WILLDO   DOING // 前面设计按钮状态： 完成, 正在做, 要做
 * }
 * 
 * 然后定义这些数据的类型格式 接口和枚举的方式 utils/typings.ts
 * 再去actionType.ts 设置派发的类型, 通过派发类型更新 state 数据内容
 * 定义变量来取代字符串, 更好的维护数据 也不希望直接维护这些公共的字符串内容
 * 
 * */
export default <IState> {
    list: []
}


