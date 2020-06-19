import React from 'react';
import InputColor from 'react-input-color';

const PickColor = (props) => {
    const { color, onChangeColor } = props;
    const styleBox = {
        border: '1px solid #dfe3e8',
        padding: '3px',
        height: '32px',
        width: '48px',
        borderRadius: '3px'
    }

    return (
        <InputColor  
            initialValue={color.hex}
            onChange={onChangeColor}
            style={styleBox}
        />
    )
    
}

export default PickColor