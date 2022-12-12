import {IncreaseCountType, ResetCountType} from "./count-reducer";
import {ChangeStartValueType} from "./start-reducer";
import {ChangeMaxValueType} from "./max-reducer";

export type MessageType = '' | 'Incorrect value!' | "enter values and press 'set'"
type ActionsType = IncreaseCountType | ResetCountType | ChangeStartValueType | ChangeMaxValueType

export const messageReducer = (message: MessageType = '', action: ActionsType) => {
    switch (action.type) {
        case "INCREASE-COUNT": return ''
        case "RESET-COUNT": return ''
        case "CHANGE-START-VALUE": return  action.text
        case "CHANGE-MAX-VALUE": return action.text
        default: return message
    }
}




