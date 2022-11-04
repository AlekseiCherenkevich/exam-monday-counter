import React from 'react';

type CountPropsType = {
    count?: number
    fontColor?: string
}

const Count: React.FC<CountPropsType> = (props) => {
    const {count, fontColor} = props
    const style = {
        fontSize: '50px',
        color: fontColor
    }

    return <h1 style={style}>{count}</h1>
};

export default Count;