import React from 'react';

export function FormTitle(props) {
    const { className, text } = props;
    return (
        <h1 className={`${className} form-title`}>{text}</h1> //we're getting these {text}, etc as props like on line 4
    )
}