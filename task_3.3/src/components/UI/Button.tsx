import React from 'react';
import clasess from './Button.module.css'

const Button = ({children}: any) => {
    return (
        <button className={clasess.btn}>{children}</button>
    );
};

export default Button;