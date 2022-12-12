import {combineReducers, createStore} from "redux";
import {startReducer} from "./start-reducer";
import {countReducer} from "./count-reducer";
import {maxReducer} from "./max-reducer";
import {messageReducer} from "./message-reducer";


const rootReducer = combineReducers({
    start: startReducer,
    count: countReducer,
    max: maxReducer,
    message: messageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)