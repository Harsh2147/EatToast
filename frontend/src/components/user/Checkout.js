import React from "react";

function Checkout() {
    return (
        <>
            {/* header section start from here */}
            <header>
                <a href="#" className="nav-logo">
                    <i className="fas fa-utensils"></i>EatToast
                </a>
                <div id="menu-button" className="fas fa-bars"></div>
                <nav className="navbar">
                    <a href="/Index">Home</a>
                    <a href="/Menu">Menu</a>
                    <a href="/Cart">Cart</a>
                    <a href="Checkout">Checkout</a>
                    <a href="#">Review</a>
                    <a href="#">Profile</a>
                </nav>
            </header>
            {/* header section ends here */}

            <div class="form-row row">


                <div class="form-container col-md-7 ">

                    <form class="checkout-form mx-3">
                        <h3 class="text-center">
                            CHECKOUT FORM
                        </h3>
                        <p class="text-center">
                            You must fill all the required field
                        </p>
                        <div class="row">

                            <h3>
                                Personal Information :
                            </h3>
                            <div class="col">
                                <label for="first-name"> First Name</label>
                                <input type="text" class="form-control" placeholder="Enter First name" name="fname" />
                            </div>

                            <div class="col">
                                <label for="first-name"> Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter Last name" name="lname" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="pnumber"> Phone number</label>
                                <input type="text" class="form-control" placeholder="Enter phone number" name="pnumber" />
                            </div>

                            <div class="col">
                                <label for="email"> Email</label>
                                <input type="text" class="form-control" placeholder="Enter email" name="email" />
                            </div>
                        </div>

                        <hr class="section-break"></hr>

                        <div class="row">
                            <h3>
                                Contact Information:
                            </h3>
                            <div class="col">
                                <label for="addressa"> Address 1</label>
                                <input type="text" class="form-control" placeholder="Enter st and house number" name="add1" />
                            </div>

                            <div class="col">
                                <label for="address2"> Address2</label>
                                <input type="text" class="form-control" placeholder="Enter address" name="add2" />
                            </div>
                        </div>



                        <div class="row">
                            <div class="col">
                                <label for="zip"> Postal code</label>
                                <input type="text" class="form-control" placeholder="Enter Postal code" name="pcode" />
                            </div>

                            <div class="col">
                                <label for="state">Select state (select one):</label>
                                <select class="form-select" id="state" name="state">
                                    <option>Ontario</option>
                                    <option>Alberta</option>
                                    <option>British Columbia</option>
                                </select>
                            </div>

                            <div class="col">
                                <label for="state">Select country (select one):</label>
                                <select class="form-select" id="country" name="country">
                                    <option>Canada</option>
                                    <option>USA</option>
                                </select>
                            </div>
                        </div>


                        <hr class="section-break"></hr>
                        <div class="row">
                            <h3>
                                Delivery Type:
                            </h3>
                            <div class="col-6">
                                <label for="state">Select Delivery Type (select one):</label>
                                <select class="form-select" id="delivery" name="delivery">
                                    <option>Online Delivery</option>
                                    <option>Pick up order</option>
                                </select>
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-6">
                                <label for="Date">Date (select one):</label>

                                <input class="form-control" type="date"></input>
                            </div>

                            <div class="col-6">
                                <label for="Time">Time (select one):</label>
                                <select class="form-select" id="time" name="time">
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>
                                    <option>11:30pm</option>

                                </select>
                            </div>

                        </div>

                        <hr class="section-break"></hr>
                        <div class="row">
                            <h3>
                                Payment Mehod:
                            </h3>
                            <div class="col">
                                <input type="radio" class="form-check-input" id="credit" name="credit" value="credit" checked />Credit Card
                                <label class="form-check-label" for="credit"></label>

                                <input type="radio" class="form-check-input" id="debit" name="debit" value="debit" />Debit Card
                                <label class="form-check-label" for="debit"></label>

                                <input type="radio" class="form-check-input" id="cash" name="cash" value="cash" />Cash on delivery
                                <label class="form-check-label" for="radio1"></label>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col">
                                <label for="cardname"> Card Holder Name</label>
                                <input type="text" class="form-control" placeholder="Enter Card Holder Name" name="cname" />
                            </div>

                            <div class="col">
                                <label for="cardnumber"> Card number</label>
                                <input type="text" class="form-control" placeholder="Enter Card number" name="cnumber" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label for="cardexp"> Expiration</label>
                                <input type="text" class="form-control" placeholder="Enter expiry date" name="exp" />
                            </div>

                            <div class="col-3">
                                <label for="cvv"> CVV</label>
                                <input type="text" class="form-control" placeholder="Enter cvv number" name="cvv" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <button class="check-button">CheckOut</button>

                            </div>
                        </div>
                    </form>
                </div>



                <div class="col-md-4">

                    <div class="cart-bottom side-cart">
                        <div class="total" mb-4>
                            <div>
                                <h5>CART TOTAL</h5>

                                <div class="d-flex justify-content-between">
                                    <h6>Subtotal</h6>
                                    <p>$17.00</p>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <h6>Tax</h6>
                                    <p>$18.25</p>
                                </div>

                                <hr className="second-hr"></hr>

                                <div class="d-flex justify-content-between">
                                    <h6>Total</h6>
                                    <p>98.00</p>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Checkout;
