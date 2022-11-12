import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

export type StateType = {
    start: number
    max: number
    count: number
    message: MessageType
}

export type MessageType = '' | 'Incorrect value!' | "enter values and press 'set'"

function App() {
    const [state, setState] = useState<StateType>({start: 0, max: 5, count: 0, message: ''})

    const increase = () => {
        if (state.count < state.max) {
            setState({...state, count: state.count + 1, message: ''})
        }
    }
    const reset = () => {
        setState({...state, count: state.start, message: ''})
    }

    const changeStartValue = (start: number) => {
        if (start >= state.max || start < 0) {
            setState({...state, start: start, message: "Incorrect value!"})
        } else {
            setState({...state, start: start, message: "enter values and press 'set'"})
        }
    }

    const changeMaxValue = (max: number) => {
        if (max <= state.start) {
            setState({...state, max: max, message: "Incorrect value!"})
        } else {
            setState({...state, max: max, message: "enter values and press 'set'"})
        }
    }

    const setLocalStorage = () => {
        localStorage.setItem('counterState', JSON.stringify({
            start: state.start, max: state.max, count: state.start, message: ''
        }))
        reset()
    }

    useEffect(()=>{
        const localStorageData = localStorage.getItem('counterState')
        if(localStorageData) {
            setState(JSON.parse(localStorageData))
        }
    },[])


    return (
        <div className="App">
            <Settings  state={state} changeStartValue={changeStartValue} changeMaxValue={changeMaxValue} setLocalStorage={setLocalStorage}/>
            <Counter {...state} increase={increase} reset={reset}/>
        </div>
    );
}

export default App;
