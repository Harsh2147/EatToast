import React, { useEffect } from "react";

function Menu() {

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

            {/* menu section start here */}
            <section class="menu-section" id="menu-section">
                <h1 class="special-head text-center mt-5"> Our <span> Menu</span></h1>
                <p class="text-center">Veniam quis mollit laboris sit nisi fugiat occaecat do minim.</p>

                <div class="menu-box-container">
                    <div class="menu-box">
                        <div class="menu-image">
                            <img src="/img/chocolate.jpg" alt="menu-image1"></img>
                            <a href="#" class="fas fa-heart"></a>
                        </div>
                        <div class="menu-box-content">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h3>
                                FrenchTosat stack
                            </h3>
                            <p>
                                Eu ullamco pariatur officia elit incididunt cupidatat culpa eu do dolor reprehenderit et.
                            </p>
                            <button class="menu-button">Add to cart</button>
                            <span class="item-price">$12.99</span>
                        </div>
                    </div>

                    <div class="menu-box">
                        <div class="menu-image">
                            <img src="/img/pancake.jpg" alt="menu-image1"></img>
                            <a href="#" class="fas fa-heart"></a>
                        </div>
                        <div class="menu-box-content">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h3>
                                Chocolate pancake
                            </h3>
                            <p>
                                Eu ullamco pariatur officia elit incididunt cupidatat culpa eu do dolor reprehenderit et.
                            </p>
                            <button class="menu-button">Add to cart</button>
                            <span class="item-price">$12.99</span>
                        </div>
                    </div>

                    <div class="menu-box">
                        <div class="menu-image">
                            <img src="/img/Blueberry.jpg" alt="menu-image1"></img>
                            <a href="#" class="fas fa-heart"></a>
                        </div>
                        <div class="menu-box-content">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h3>
                                Blueberry waffle
                            </h3>
                            <p>
                                Eu ullamco pariatur officia elit incididunt cupidatat culpa eu do dolor reprehenderit et.
                            </p>
                            <button class="menu-button">Add to cart</button>
                            <span class="item-price">$12.99</span>
                        </div>
                    </div>

                    <div class="menu-box">
                        <div class="menu-image">
                            <img src="/img/Blueberry.jpg" alt="menu-image1"></img>
                            <a href="#" class="fas fa-heart"></a>
                        </div>
                        <div class="menu-box-content">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h3>
                                Blueberry waffle
                            </h3>
                            <p>
                                Eu ullamco pariatur officia elit incididunt cupidatat culpa eu do dolor reprehenderit et.
                            </p>
                            <button class="menu-button">Add to cart</button>
                            <span class="item-price">$12.99</span>
                        </div>
                    </div>

                    <div class="menu-box">
                        <div class="menu-image">
                            <img src="/img/chocolate.jpg" alt="menu-image1"></img>
                            <a href="#" class="fas fa-heart"></a>
                        </div>
                        <div class="menu-box-content">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h3>
                                FrenchTosat stack
                            </h3>
                            <p>
                                Eu ullamco pariatur officia elit incididunt cupidatat culpa eu do dolor reprehenderit et.
                            </p>
                            <button class="menu-button">Add to cart</button>
                            <span class="item-price">$12.99</span>
                        </div>
                    </div>

                    <div class="menu-box">
                        <div class="menu-image">
                            <img src="/img/pancake.jpg" alt="menu-image1"></img>
                            <a href="#" class="fas fa-heart"></a>
                        </div>
                        <div class="menu-box-content">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <h3>
                                Chocolate pancake
                            </h3>
                            <p>
                                Eu ullamco pariatur officia elit incididunt cupidatat culpa eu do dolor reprehenderit et.
                            </p>
                            <button class="menu-button">Add to cart</button>
                            <span class="item-price">$12.99</span>
                        </div>
                    </div>
                </div>
            </section >
            {/* menu section end here */}

        </>
    );
}

export default Menu;
