import { findByLabelText } from '@testing-library/react';
import React from 'react';
import './LogoStyle.css';

const Logo = (props) => {
    return (
        <div>
            <h3 className='logo'>{props.name}</h3>
        </div>
    )
}

export default Logo;