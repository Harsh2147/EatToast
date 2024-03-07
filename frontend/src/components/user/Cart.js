import React from "react";

function Cart() {
  return <>

    {/* header section start from here */}
    <header>
      <a href="#" class="nav-logo"><i class="fas fa-utensils"></i>EatToast</a>
      <div id="menu-button" class="fas fa-bars"></div>
      <nav class="navbar">
        <a href="/Index">Home</a>
        <a href="/Menu">Menu</a>
        <a href="/Cart">Cart</a>
        <a href="#">Order</a>
        <a href="#">Review</a>
        <a href="#">Profile</a>
      </nav>
    </header>
    {/* header section end here */}


    <div class="container-fluid text-center">
      <div class="cart-container ">

        <p class="cart-head">
          YOUR SHOPPING CART
        </p>
        <table  class="mx-auto" width="100%">
          <thead>
            <tr>
              <td>
                Remove
              </td>
              <td>
                Image
              </td>
              <td>
                Product
              </td>
              <td>
                Price
              </td>
              <td>
                Quantity
              </td>
              <td>
                Total
              </td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <a href="#">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>

              <td>
                <img src="/img/pancake.jpg">
                </img>
              </td>

              <td>
                <h5>
                  Pancake
                </h5>
              </td>

              <td>
                <h5>
                  $65
                </h5>
              </td>

              <td>
                <input class="w-25 pl-1" value="1" type="number"></input>
              </td>

              <td>
                <h5>
                  $130.99
                </h5>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>

              <td>
                <img src="/img/pancake.jpg">
                </img>
              </td>

              <td>
                <h5>
                  Pancake
                </h5>
              </td>

              <td>
                <h5>
                  $65
                </h5>
              </td>

              <td>
                <input class="w-25 pl-1" value="1" type="number"></input>
              </td>

              <td>
                <h5>
                  $130.99
                </h5>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>

              <td>
                <img src="/img/pancake.jpg">
                </img>
              </td>

              <td>
                <h5>
                  Pancake
                </h5>
              </td>

              <td>
                <h5>
                  $65
                </h5>
              </td>

              <td>
                <input class="w-25 pl-1" value="1" type="number"></input>
              </td>

              <td>
                <h5>
                  $130.99
                </h5>
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>

    <div class="cart-bottom">
      <div class="row">
        <div class="coupon col-lg-5 col-md-5 col-12 mx-3" mb-4>
          <div>
            <h5>
              COUPON
            </h5>

            <p>
              Enter Your Coupon name if you have one.
            </p>

            <input type="text" placeholder="coupon code"></input>
            <button>APPLY COUPON</button>
          </div>
        </div>

        <div class="total col-lg-6 col-md-6 col-12" mb-4>
          <div>
            <h5>
              CART TOTAL
            </h5>

            <div class="d-flex justify-content-between">
              <h6>
                Subtotal
              </h6>
              <p>
                $215.00
              </p>
            </div>

            <div class="d-flex justify-content-between">
              <h6>
                Tax
              </h6>
              <p>
                $18.25
              </p>
            </div>

            <hr className="second-hr"></hr>

            <div class="d-flex justify-content-between">
              <h6>
                Total
              </h6>
              <p>
                $235.00
              </p>
            </div>

            <div class="d-flex justify-content-between">
              <h6>
                
              </h6>
              <p>
              <button class="ml-auto">PROCESS</button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  </>;
}

export default Cart;
