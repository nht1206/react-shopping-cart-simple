import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShipping, subShipping } from "../actions/Cart";

export default function Receipt() {
  const inputRef = useRef(null);
  const total = useSelector(state => state.total);
  const dispatch = useDispatch();
  useEffect(() => {
      if (!inputRef.checked) {
          console.log("Test");
      }
  }, [])
  const handleChange = (e) => {
    if (e.target.checked) {
        dispatch(addShipping(6));
    } else {
        dispatch(subShipping(6));
    }
  }
  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={inputRef} onChange={handleChange} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: {total} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
}
