import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FETCH_ALL_PRODUCTS } from "../../graphql/FetchProductQuery";
import { Link } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const cartItemsString = localStorage.getItem("cartItems");
  //const [cartItem, setCartItems] = useState([]);
  const cartItems = JSON.parse(cartItemsString) || []; // Parse the string into an array, or default to an empty array if cartItemsString is null or cannot be parsed
  const [cartItem, setCartItems] = useState(cartItems);
  const [totalPriceNew, setTotalPrice] = useState(0);
  let totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.Product_price,
    0
  );
  const handleAddProduct = (Product) => {
    const ProductExist = cartItem.find((item) => item._id === Product._id);

    if (ProductExist) {
      setCartItems(
        cartItem.map((item) =>
          item._id === Product._id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItem, { ...Product, quantity: 1 }]);
      //cartItems = cartItem;
    }
  };
  const handleRemoveProduct = (Product) => {
    const ProductExist = cartItem.find((item) => item._id === Product._id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItem.filter((item) => item._id !== Product._id));
    } else {
      setCartItems(
        cartItem.map((item) =>
          item._id === Product._id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );

      //cartItems = cartItem;
    }
  };
  useEffect(() => {
    const newTotalPrice = cartItem.reduce(
      (price, item) => price + item.quantity * item.Product_price,
      0
    );
    setTotalPrice(newTotalPrice);
    totalPrice = totalPriceNew;
  }, [cartItem]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem]);
  console.log("cartItem_updated" + JSON.stringify(cartItem));
  return (
    <>
      {/* header section start from here */}
      <header>
        <a href="#" class="nav-logo">
          <i class="fas fa-utensils"></i>EatToast
        </a>
        <div id="menu-button" class="fas fa-bars"></div>
        <nav class="navbar">
          <a href="/Index">Home</a>
          <a href="/Menu">Menu</a>
          <a href="#">Order</a>
          <a href="#">Review</a>
          <a href="#">Profile</a>
        </nav>
      </header>
      {/* header section end here */}

      {/* menu section start here */}
      <section class="menu-section" id="menu-section">
        <h1 class="special-head text-center mt-5">
          {" "}
          Your <span>Cart</span>
        </h1>
        <p class="text-center">
          Veniam quis mollit laboris sit nisi fugiat occaecat do minim.
        </p>
        <div class="container">
          {cartItems.map((item, index) => (
            <div class="cart-items">
              <div class="cart-item">
                <img src="/img/pancake.jpg" alt="menu-image1"></img>

                <div class="cart-item-content">
                  <tr key={item._id}>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>{item.Product_name}</h3>
                    <p>{item.Product_description}</p>
                    <div class="quantity">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                      ></input>
                      <button
                        class="increase"
                        onClick={() => handleAddProduct(item)}
                      >
                        +
                      </button>
                      <button
                        class="decrease"
                        onClick={() => handleRemoveProduct(item)}
                      >
                        -
                      </button>
                    </div>

                    <span class="item-price">
                      {item.quantity}*${item.Product_price}
                    </span>
                  </tr>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <div class="total-container">
          <div class="total-price">Total Price: ${totalPrice}</div>
          <button class="checkout-button">Proceed to Checkout</button>
        </div>
      </section>
      {/* menu section end here */}
    </>
  );
}

export default Cart;
