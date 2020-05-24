import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/Cart";

export default function Home() {
  const listItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function handleClick(id) {
    dispatch(addToCart(id));
  }
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {listItems.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <span
                  to="/"
                  className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  <i className="material-icons">add</i>
                </span>
              </div>

              <div className="card-content">
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
