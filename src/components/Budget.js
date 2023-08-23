import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { Currency, budget } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency} {budget}</span>
        </div>
    );
};
export default Budget;