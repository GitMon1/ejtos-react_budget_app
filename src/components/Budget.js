import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { Currency, budget } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
 Budget: {Currency}<input type='number' value={budget} id='budget'></input>
        </div>
    );
};
export default Budget;