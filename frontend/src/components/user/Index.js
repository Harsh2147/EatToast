import React, { useEffect } from "react";


function Index() {

    useEffect(() => {
        let menu = document.querySelector('#menu-button');
        let navbar = document.querySelector('.navbar');

        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };

        window.onscroll = () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        };
    }, []);



    return (
        <>

            {/* header section start from here */}
            <header>
                <a href="#" class="nav-logo"><i class="fas fa-utensils"></i>EatToast</a>
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


            {/* banner section start here */}

            <div class="banner">
                <div class="banner-overlay"></div>
                <div class="banner-content">
                    <h3>
                        EatToast Restaurant Management System
                    </h3>
                    <p>
                        A restaurant is a culinary establishment where prepared food and beverages are
                        served to customers. It is a space where people gather to enjoy a variety of dishes,
                        often created by skilled chefs. Restaurants come in diverse styles and cuisines,
                        ranging from casual eateries to fine dining establishments. They play a crucial role
                        in social and cultural experiences, offering a space for celebrations, meetings, and
                        shared moments.
                    </p>
                    <a href="#" class="main-button">Order Now</a>
                </div>
            </div>
            {/* banner section end here */}


            {/* speciality section start here */}
            <div class="special" id="special" >
                <h1 class="special-head text-center"> Our <span>Speciality Menu</span></h1>

                <div class="special-box-container">
                    <div class="box">
                        <img src="/img/pancake.jpg" alt="Speciality 1" class="special-image" />

                        <div class="content">
                            <div class="fas fa-pizza-slice content-icon"></div>
                            <h3>
                                Breakfast wrap
                            </h3>
                            <p>
                                The  "burger" is derived from the resemblance of the icon to the layers in a hamburger.
                            </p>
                        </div>
                    </div>


                    <div class="box">
                        <img src="/img/chocolate.jpg" alt="Speciality 1" class="special-image" />

                        <div class="content">
                            <div class="fas fa-glass-whiskey content-icon"></div>
                            <h3>
                                Breakfast wrap
                            </h3>
                            <p>
                                The  "burger" is derived from the resemblance of the icon to the layers in a hamburger.
                            </p>
                        </div>
                    </div>


                    <div class="box">
                        <img src="/img/Blueberry.jpg" alt="Speciality 1" class="special-image" />

                        <div class="content">
                            <div class="fas fa-mug-hot content-icon"></div>
                            <h3>
                                Breakfast wrap
                            </h3>
                            <p>
                                The  "burger" is derived from the resemblance of the icon to the layers in a hamburger.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* speciality section end here */}


            {/* about section start here */}

            <section class="main-about-us" id="main-about-us">
                <h1 class="special-head text-center"> About <span>Us</span></h1>


                <div class="row">
                    <div class="main-about-us-image">
                        <img src="/img/aboutus2.jpg" alt="about-us"></img>

                    </div>

                    <div class="about-us-content">
                        <h3>
                            Best food in the country
                        </h3>

                        <p>
                            loremSunt aliquip dolore ullamco culpa aliquip proident pariatur Lorem nulla nisi Lorem esse. Fugiat pariatur cupidatat sit ut quis velit ad labore. Sunt nostrud nostrud do sunt consequat consectetur.
                        </p>
                        <p>
                            Laborum cillum id cupidatat anim fugiat reprehenderit. Velit anim aliquip vel

                        </p>

                        <div class="icons-container">
                            <div class="about-us-icon">
                                <i class="fas fa-shipping-fast"></i>
                                <span>Free delivery</span>
                            </div>

                            <div class="about-us-icon">
                                <i class="fas fa-dollar-sign"></i>
                                <span>Easy Payment</span>
                            </div>

                            <div class="about-us-icon">
                                <i class="fas fa-headset"></i>
                                <span>24/7 service</span>
                            </div>
                        </div>
                        <button class="about-us-btn">
                            Learn More
                        </button>

                    </div>
                </div>
            </section>

            {/* about section end here */}

        </>
    );
}


export default Index;