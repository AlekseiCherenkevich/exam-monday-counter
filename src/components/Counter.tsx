import React from "react";
import Count from "./Count";
import Button from "./Button";
import {MessageType} from "../App";

type CounterPropsType = {
    count: number
    start: number
    max: number
    message: MessageType
    increase: () => void
    reset: () => void
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const {count ,start, max, message, increase, reset} = props

    const getFontColor = () => {
        if (message === 'Incorrect value!' || count === max) {
            return 'red'
        } else {
            return 'black'
        }
    }

    return <div className='counterWrapper'>
        <Count fontColor={getFontColor()} count={message ? message : count}/>
        <div>
            <Button isDisabled={count === max || message !== ''} callback={increase}>inc</Button>
            <Button isDisabled={count === start || message !== ''} callback={reset}>reset</Button>
        </div>
    </div>
}