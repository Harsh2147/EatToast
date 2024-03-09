import React, { useEffect } from "react";
import Header from "./Header";


function Review() {


    return (

        <>
            {/* header section start from here */}
            <Header />
            {/* header section end here */}



            <div class="oder">

                <h1><span>Oder</span>Now</h1>

                <div class="oder_main">

                    <div class="oder_img">
                        <img src="/img/oder.png"></img>
                    </div>

                    <div class="oder_form">

                        <div class="form-row row">
                            <div class="form-container  ">
                                <form class="checkout-form" >
                                    <h3 class="text-center">GIVE REVIEW</h3>
                                    <p class="text-center">
                                        Reviews matter's a lot in our business
                                    </p>

                                    <div class="row">
                                        <h3>Personal Information :</h3>
                                        <div class="col">
                                            <label for="first-name"> First Name</label>

                                            <input
                                                id="Firstname"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter First name"
                                                name="Firstname"

                                            />
                                        </div>

                                        <div class="col">
                                            <label for="first-name"> Last Name</label>
                                            <input
                                                id="Lastname"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Last name"
                                                name="Lastname"

                                            />
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col">
                                            <label for="pnumber"> Phone number</label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter phone number"
                                                id="Mobile"
                                                name="Mobile"
                                               
                                            />
                                        </div>
                                      

                                        <div class="col">
                                            <label for="email"> Email</label>

                                            <input
                                                type="Email"
                                                className="form-control"
                                                placeholder="Enter Email"
                                                id="email"
                                                name="email"
                                            
                                            />
                                        </div>
                                    </div>

                                    <h2 class="section-break">

                                    </h2>

                                    <div class="row">
                                        <h3>Order Information :</h3>
                                        <div class="col">
                                            <label for="order-details"> Order Details</label>
                                            <textarea
                                                type="Email"
                                                className="form-control"
                                                placeholder="Enter Email"
                                                id="email"
                                                name="email"
                                            
                                            />
                                           
                                        </div>

                                        
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>

                <a href="#" class="oder_btn">Oder Now</a>
            </div>
        </>
    )
}

export default Review;