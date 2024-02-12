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
                    <a href="#">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">Order</a>
                    <a href="#">Review</a>
                    <a href="#">Profile</a>
                </nav>
            </header>


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
                        <img src="/img/poster2.jpg" alt="Speciality 1" class="special-image" />

                        <div class="content">
                            <div class="fas fa-pizza-slice content-icon"></div>
                            <h3>
                                Breakfast wrap
                            </h3>
                            <p>
                                The term "burger" is derived from the resemblance of the icon to the layers in a hamburger. Each horizontal line in the icon represents a layer of the burger. When clicked or tapped, it often reveals or hides a navigation menu or additional content on a website.
                            </p>
                        </div>
                    </div>


                    <div class="box">
                        <img src="/img/poster2.jpg" alt="Speciality 1" class="special-image" />

                        <div class="content">
                        <div class="fas fa-glass-whiskey content-icon"></div>
                            <h3>
                                Breakfast wrap
                            </h3>
                            <p>
                                The term "burger" is derived from the resemblance of the icon to the layers in a hamburger. Each horizontal line in the icon represents a layer of the burger. When clicked or tapped, it often reveals or hides a navigation menu or additional content on a website.
                            </p>
                        </div>
                    </div>


                    <div class="box">
                        <img src="/img/s2.jpg" alt="Speciality 1" class="special-image" />

                        <div class="content">
                        <div class="fas fa-mug-hot content-icon"></div>
                            <h3>
                                Breakfast wrap
                            </h3>
                            <p>
                            The term "burger" is derived from the resemblance of the icon to the layers in a hamburger. Each horizontal line in the icon represents a layer of the burger. When clicked or tapped, it often reveals or hides a navigation menu or additional content on a website.
                            </p>


                        </div>
                    </div>
                </div>

            </div>
            {/* speciality section end here */}

        </>
    );
}


export default Index;