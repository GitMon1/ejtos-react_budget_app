import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const { Currency } = useContext(AppContext);
    const changeCurrency = (val)=>{
            Currency({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className="alert alert-success"> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
        <option value="$">United States($)</option>
      </select> 
      } 
    </div>
    );
};
export default Currency;