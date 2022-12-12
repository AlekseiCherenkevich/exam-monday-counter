import {checkLocalStorage} from "../App";


type ActionsType = IncreaseCountType | ResetCountType
export type IncreaseCountType = ReturnType<typeof increaseAC>
export type ResetCountType = ReturnType<typeof resetAC>

export const countReducer = (count: number = checkLocalStorage('count', 0), action: ActionsType) => {
    switch (action.type) {
        case "INCREASE-COUNT":return count + 1
        case "RESET-COUNT": return action.start
        default: return count
    }
}

export const increaseAC = () => ({type: "INCREASE-COUNT"} as const)
export const resetAC = (start: number) => ({type: "RESET-COUNT", start} as const)