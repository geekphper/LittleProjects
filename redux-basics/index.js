import {createStore} from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

let store = createStore(todoApp)

//打印出初始的状态
console.log(store.getState())

//添加状态变化的监听器，然后打印
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
