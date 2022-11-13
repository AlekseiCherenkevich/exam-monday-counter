import React, {ChangeEvent} from "react";
import Button from "./Button";
import {StateType} from "../App";

type SettingsPropsType = {
    state: StateType
    changeStartValue: (start: number) => void
    changeMaxValue: (max: number) => void
    setLocalStorage: () => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {state, changeStartValue, changeMaxValue, setLocalStorage} = props

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStartValue(+e.currentTarget.value)
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(+e.currentTarget.value)
    }

    return <div className='settings'>
        <div className='inputWrapper'>
            <span className='settingsValues'>start value: </span>
            <input
                value={state.start}
                type="number"
                onChange={onChangeStartValueHandler}
                style={state.message === "Incorrect value!" ? {backgroundColor: 'red'} : undefined}
            />
        </div>
        <div className='inputWrapper'>
            <span className='settingsValues'>max value: </span>
            <input
                type="number"
                value={state.max}
                onChange={onChangeMaxValueHandler}
                style={state.message === "Incorrect value!" ? {backgroundColor: 'red'} : undefined}
            />
        </div>
        <Button isDisabled={state.message === "Incorrect value!"} callback={setLocalStorage}>set</Button>
    </div>
}