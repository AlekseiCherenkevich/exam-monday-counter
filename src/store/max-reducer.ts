import { checkLocalStorage } from "../App";
import {MessageType} from "./message-reducer";

type ActionsType = ChangeMaxValueType
export type ChangeMaxValueType = ReturnType<typeof changeMaxValueAC>

export const maxReducer = (max: number = checkLocalStorage('max', 5), action: ActionsType) => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE":
            return action.value
        default:
            return max
    }
}

export const changeMaxValueAC = (value: number, text: MessageType) => ({type: "CHANGE-MAX-VALUE", value, text} as const)