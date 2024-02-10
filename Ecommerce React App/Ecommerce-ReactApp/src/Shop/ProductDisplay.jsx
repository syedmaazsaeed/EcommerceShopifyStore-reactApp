import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc =
  "Adidas is known for producing high-quality shoes that are durable and long-lasting. They use top-quality materials to ensure that their shoes can withstand regular wear and tear.";

const ProductDisplay = ({ item }) => {
  //  console.log(item)

  // Creating an Object (Array Destructuring Method)
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);

  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState(" Select Size");
  const [color, setColor] = useState(" Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handledecrement = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleincrement = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Size: ",size);
    // console.log("Color: ",color);
    // console.log("Quantity: ",prequantity);
    // console.log("Coupon: ",coupon);

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };
    // console.log(product)

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // If true this uper statement will update local storage

    //  Update Local Storage

    localStorage.setItem("cart", JSON.stringify(existingCart));

    //  Reset FormField

    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>

          <span>{ratingsCount} reviews</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* Cart Components */}

      <div>
        <form onSubmit={handleSubmit}>
          {/* Sizing */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>Med</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
              <option>3XL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* Color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Black</option>
              <option>White</option>
              <option>Gray</option>
              <option>Purple</option>
              <option>Orange</option>
              <option>Pink</option>
              <option>Blue</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Cart Increment and decrement functionality */}

          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handledecrement}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="quantitybtn"
              id="quantitybtn"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleincrement}>
              +
            </div>
          </div>
          {/* Coupon Code Field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/*  Buttons Section */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-danger">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
