import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    children?: string
    isDisabled?: boolean
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const {children, callback, isDisabled} = props

    return (
        <button className={s.button}
            disabled={isDisabled}
            onClick={callback}
        >{children}</button>
    );
};

export default Button;