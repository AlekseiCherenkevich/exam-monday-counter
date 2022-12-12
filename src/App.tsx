import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {increaseAC, resetAC} from "./store/count-reducer";
import {changeStartValueAC} from "./store/start-reducer";
import {changeMaxValueAC} from "./store/max-reducer";
import {MessageType} from "./store/message-reducer";

export type StateType = {
    start: number
    max: number
    count: number
    message: MessageType
}

export const checkLocalStorage = (key: string, defaultValue: number) => {
    const data = localStorage.getItem('counterState')
    return data
        ? JSON.parse(data)[key]
        : defaultValue
}


function App() {
    const dispatch = useDispatch()

    const start = useSelector<AppStateType, number>(state => state.start)
    const count = useSelector<AppStateType, number>(state => state.count)
    const max = useSelector<AppStateType, number>(state => state.max)
    const message = useSelector<AppStateType, MessageType>(state => state.message)


    const increase = () => {
        if (count < max) {
            dispatch(increaseAC())
        }
    }
    const reset = () => {
        dispatch(resetAC(start))
    }

    const changeStartValue = (value: number) => {
        if (value >= max || value < 0 || max < 1) {
            dispatch(changeStartValueAC(value, "Incorrect value!"))
        } else {
            dispatch(changeStartValueAC(value, "enter values and press 'set'"))
        }
    }

    const changeMaxValue = (value: number) => {
        if (value <= start || value < 1 || start < 0) {
            dispatch(changeMaxValueAC(value, "Incorrect value!"))
        } else {
            dispatch(changeMaxValueAC(value, "enter values and press 'set'"))
        }
    }

    const setLocalStorage = () => {
        localStorage.setItem('counterState', JSON.stringify({
            start: start, max: max, count: start
        }))
        reset()
    }

    return (
        <div className="App">
            <Settings state={{start: start, count: count, max: max, message: message}}
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      setLocalStorage={setLocalStorage}
            />
            <Counter start={start}
                     count={count}
                     max={max}
                     message={message}
                     increase={increase}
                     reset={reset}/>
        </div>
    );
}

export default App;
