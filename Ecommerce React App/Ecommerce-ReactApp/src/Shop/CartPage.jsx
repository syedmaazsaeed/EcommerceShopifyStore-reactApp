import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // ()=>{} (Anonyms Function)

  useEffect(() => {
    // Fetch Cart Data/ Cart Items from Local Storage

    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // calculate the total prices

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Handle Quantity Increase

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // Update the local storage with new cart items

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  // Handle Quantity decrease

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      // Update the local storage with new cart items

      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  // Handle Delete/ items removes Functionality

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    // Update new Cart

    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    // Update the local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart Subtotals

  const cartSubtotals = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Order Total

  const orderTotal = cartSubtotals;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart Top Section */}

            <div className="cart-top">
              <table>
                <thead>
                  <tr className="bg-dark">
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Modify</th>
                  </tr>
                </thead>

                {/*  Table Body Section */}
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="Relod Image Again" />
                          </Link>
                        </div>

                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box "
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img
                            src={delImgUrl}
                            alt="Check Internet Connection"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/*..---Cart Top ends..--- */}

            {/* Cart Bottom */}

            <div className="cart-bottom">
              {/*  Checkout box */}

              <div className="cart-checkout-box">
                <form className="coupon ">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code"
                  />
                  <input
                    type="submit"
                    value="Apply Coupon "
                    className="bg-dark"
                  />
                </form>

                <form className="cart-checkout">
                  <input
                    type="submit"
                    value="Update Cart"
                    className="bg-warning text-dark"
                  />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              {/*  ---Check out box ends.--- */}

              {/*  Shopping BOX */}

              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="PK">Pakistan (PAK)</option>
                          <option value="Germany">Germany (GM)</option>
                          <option value="US">United State (US)</option>
                          <option value="CND">Canada (CND)</option>
                          <option value="CH">China (CH)</option>
                          <option value="TKS">Turkey (TKS)</option>
                          <option value="UK">United Kingdom (UK)</option>
                          <option value="ITY">Italy (ITY)</option>
                          <option value="AUS">Australia (AUS)</option>
                        </select>
                        <span className="select-icon bg-dark">
                          <i className="icofont-rounded-down "></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="PK">Islamabad</option>
                          <option value="Germany">Berlin</option>
                          <option value="US">Washington DC</option>
                          <option value="CND">Ottawa</option>
                          <option value="CH">Beijing</option>
                          <option value="TKS">Ankara</option>
                          <option value="UK">London</option>
                          <option value="ITY">Rome</option>
                          <option value="AUS">Canberra</option>
                        </select>
                        <span className="select-icon bg-dark">
                          <i className="icofont-rounded-down "></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        placeholder="Postal Code/Zip Code *"
                        className="cart-page-input-text"
                        required
                      />
                      <button type="submit" className="bg-danger">
                        Update Address
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubtotals}</p>
                        </li>
                        <li>
                          <span className="pull-left">Shipping Fee</span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
