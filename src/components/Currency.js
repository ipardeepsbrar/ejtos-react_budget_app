import React, { useContext } from "react"
import { AppContext } from '../context/AppContext';
import '../index.css'

const Currency = (props) => {
    const {dispatch} = useContext(AppContext);

    const currencyHandler = e => {
        dispatch({type:'CHG_CURRENCY', payload:e.target.value})
    }

  return (
    <div >
        {/* <label htmlFor="currency" className="">Currency</label> */}
        <select id="currency" className="alert alert-success container-fluid" onChange={currencyHandler}>
            <option defaultValue value='£'>£ Pound</option>
            <option value='$'>$ Dollar</option>
            <option value='€'>€ Euro</option>
            <option value='₹'>₹ Ruppee</option>
        </select>
    </div>
  )
};

export default Currency;
