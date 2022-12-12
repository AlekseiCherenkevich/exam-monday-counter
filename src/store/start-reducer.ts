import {MessageType} from "./message-reducer";
import {checkLocalStorage} from "../App";

type ActionsType = ChangeStartValueType
export type ChangeStartValueType = ReturnType<typeof changeStartValueAC>

export const startReducer = (start: number = checkLocalStorage('start', 0), action: ActionsType) => {
    switch (action.type) {
        case "CHANGE-START-VALUE": return  action.value
        default: return start
    }
}

export const changeStartValueAC = (value: number, text: MessageType) => ({type: "CHANGE-START-VALUE", value, text} as const)

