import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    children?: string
    isDisabled?: boolean
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const {children, callback, isDisabled} = props
    const style = {
        width: '200px',
        height: '90px',
        fontSize: '20px',
        borderRadius: '10px',
        border: 'none',
        margin: '0 10px'
    }
    return (
        <button className={s.button}
            style={style}
            disabled={isDisabled}
            onClick={callback}
        >{children}</button>
    );
};

export default Button;