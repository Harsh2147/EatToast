import React, { useEffect } from "react";
import Header from "./Header";

function Index() {
  useEffect(() => {
    let menu = document.querySelector("#menu-button");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    };
  }, []);

  return (
    <>
      {/* header section start from here */}
      <Header />
      {/* header section end here */}

      {/* banner section start here */}

      <div class="banner">
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h3>EatToast Restaurant Management System</h3>
          <p>
            A restaurant is a culinary establishment where prepared food and
            beverages are served to customers. It is a space where people gather
            to enjoy a variety of dishes, often created by skilled chefs.
            Restaurants come in diverse styles and cuisines, ranging from casual
            eateries to fine dining establishments. They play a crucial role in
            social and cultural experiences, offering a space for celebrations,
            meetings, and shared moments.
          </p>
          <a href="#" class="main-button">
            Order Now
          </a>
        </div>
      </div>

      {/* banner section end here */}

      {/* speciality section start here */}
      <div class="special" id="special">
        <h1 class="special-head text-center">
          {" "}
          Our <span>Speciality Menu</span>
        </h1>

        <div class="special-box-container">
          <div class="box">
            <img
              src="/img/pancake.jpg"
              alt="Speciality 1"
              class="special-image"
            />

            <div class="content">
              <div class="fas fa-pizza-slice content-icon"></div>
              <h3>Breakfast wrap</h3>
              <p>
                The "burger" is derived from the resemblance of the icon to the
                layers in a hamburger.
              </p>
            </div>
          </div>

          <div class="box">
            <img
              src="/img/chocolate.jpg"
              alt="Speciality 1"
              class="special-image"
            />

            <div class="content">
              <div class="fas fa-glass-whiskey content-icon"></div>
              <h3>Breakfast wrap</h3>
              <p>
                The "burger" is derived from the resemblance of the icon to the
                layers in a hamburger.
              </p>
            </div>
          </div>

          <div class="box">
            <img
              src="/img/Blueberry.jpg"
              alt="Speciality 1"
              class="special-image"
            />

            <div class="content">
              <div class="fas fa-mug-hot content-icon"></div>
              <h3>Breakfast wrap</h3>
              <p>
                The "burger" is derived from the resemblance of the icon to the
                layers in a hamburger.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* speciality section end here */}

      {/* about section start here */}

      <div class="about">
        <div class="about_main">
          <div class="about_image">
            <img src="/img/about.png" />
          </div>

          <div class="about_text">
            <h1>
              <span>About</span>Us
            </h1>
            <h3>Why food choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae dolore tempora fugiat quisquam illum, veniam adipisci
              iusto consequuntur porro explicabo repudiandae nam quis beatae
              obcaecati. Magnam provident fuga aspernatur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Cum minus facilis placeat sint
              repellendus dolorum nostrum, corrupti magni ducimus, et neque
              nihil enim. Tempore quia rerum placeat laboriosam, sit quasi!
            </p>

            <div class="about_services">
              <div class="s_1">
               
                <a href="#">Fast Delivery</a>
              </div>

              <div class="s_1">
               
                <a href="#">Easy Payment</a>
              </div>

              <div class="s_1">
                
                <a href="#">24 x 7 Services</a>
              </div>
            </div>

            <a href="#" class="about_btn">
              <i class="fa-solid fa-burger"></i>Order Now
            </a>
          </div>
        </div>
      </div>

      {/* about section end here */}




      <div class="team">

        <h1 class="special-head text-center">
          {" "}
          Our <span>Speciality Team</span>
        </h1>

        <div class="team_line_1"></div>


        <div class="team_box">

          <div class="team_card">

            <div class="team_img">
              <img src="/img/team_1.jpg" />
            </div>

            <div class="team_tag">

              <h2>John Deo</h2>
              <p class="job">Cook</p>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>

            </div>

          </div>

          <div class="team_card">

            <div class="team_img">
              <img src="/img/team_2.jpg" />
            </div>

            <div class="team_tag">

              <h2>John Deo</h2>
              <p class="job">Cook</p>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>

            </div>

          </div>

          <div class="team_card">

            <div class="team_img">
              <img src="/img/team_3.jpg" />
            </div>

            <div class="team_tag">

              <h2>John Deo</h2>
              <p class="job">Cook</p>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>

            </div>

          </div>

          <div class="team_card">

            <div class="team_img">
              <img src="/img/team_4.jpg" />
            </div>

            <div class="team_tag">

              <h2>John Deo</h2>
              <p class="job">Cook</p>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>

            </div>

          </div>

        </div>

      </div>



    </>
  );
}

export default Index;
