import React from 'react';

type CountPropsType = {
    count?: number | string
    fontColor?: string
}

const Count: React.FC<CountPropsType> = (props) => {
    const {count, fontColor} = props
    const style = {
        color: fontColor
    }

    return <h1 className='counterValue' style={style}>{count}</h1>
};

export default Count;