import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Checkout() {
  const navigate = useNavigate();
  const cartItemsString = localStorage.getItem("cartItems");
  const cartItems = JSON.parse(cartItemsString) || [];
  const [totalPrice, setTotalPrice] = useState(0);
  const taxRate = 0.13;

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (price, item) => price + item.quantity * item.Product_price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleCheckout = () => {
    // Perform checkout process here
    // For example, clear the cart and redirect to a thank you page
    localStorage.removeItem("cartItems");
    navigate("/thank-you");
  };

  const taxAmount = totalPrice * taxRate;
  const totalPriceWithTax = totalPrice + taxAmount;

  return (
    <>
      <Header />
      <div class="container-fluid text-center">
        <div class="cart-container ">
          <p class="cart-head">CHECKOUT</p>
          <table className="mx-auto" width="100%">
            <thead>
              <tr>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <h5>{item.Product_name}</h5>
                  </td>
                  <td>
                    <h5>${item.Product_price}</h5>
                  </td>
                  <td>
                    <h5>{item.quantity}</h5>
                  </td>
                  <td>
                    <h5>${item.quantity * item.Product_price}</h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div class="cart-bottom">
        <div class="row">
          <div class="total col-lg-6 col-md-6 col-12" mb-4>
            <div>
              <h5>CART TOTAL</h5>

              <div class="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <p>${totalPrice}</p>
              </div>

              <div class="d-flex justify-content-between">
                <h6>Tax</h6>
                <p>${taxAmount.toFixed(2)}</p>
              </div>

              <hr className="second-hr"></hr>

              <div class="d-flex justify-content-between">
                <h6>Total</h6>
                <p>${totalPriceWithTax.toFixed(2)}</p>
              </div>

              <div class="d-flex justify-content-between">
                <h6></h6>
                <p>
                  <button class="ml-auto">PROCESS</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
