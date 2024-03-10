import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_REVIEW } from "../../graphql/AddReview";
import Header from "./Header";

function Review() {
  const navigate = useNavigate();
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [Message, setMessage] = useState("");
  const [Mobile, setMobile] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [insertReview, { loading, error, data }] = useMutation(ADD_REVIEW);
  const validateForm = async () => {
    const errors = [];

    if (!Firstname) {
      errors.push("Firstname field is required");
    }
    if (!Lastname) {
      errors.push("Lastname field is required");
    }
    if (!email) {
      errors.push("Email field is required");
    }

    if (!Mobile) {
      errors.push("Mobile is required");
    }
    if (!Message) {
      errors.push("Message is required");
    }

    setErrorMessages(errors);
    return errors.length === 0;
  };
  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setemail("");
    setMessage("");
    setMobile("");
    setErrorMessages([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await insertReview({
          variables: {
            reviewInput: {
              Firstname,
              Lastname,
              email,
              Message,
              Mobile: parseInt(Mobile),
            },
          },
        });
        // console.log("result.data " + result.data);
        // console.log("result.data.signupCustomer " + result.data.signupCustomer);
        if (result.data && result.data.createReview) {
          alert("Review Added Successfully! Thank You!!");
          resetForm();
          // navigate("/UserLogin");
        }
      } catch (error) {
        // Check if the error message is related to an existing user
        console.log("Error" + error);
        return;
      }
    }
  };
  return (
    <>
      {/* header section start from here */}
      <Header />
      {/* header section end here */}

      <div class="oder mt-5">
        <div class="oder_main">
          <div class="oder_img">
            <img src="/img/review.jpg"></img>
          </div>

          <div class="oder_form">
            <div class="form-row row">
              <div class="form-container">
                <form class="checkout-form" onSubmit={handleSubmit}>
                  <h3 class="text-center review-head">GIVE REVIEW</h3>
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
                        value={Firstname}
                        onChange={(e) => setFirstname(e.target.value)}
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
                        value={Lastname}
                        onChange={(e) => setLastname(e.target.value)}
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
                        value={Mobile}
                        onChange={(e) => setMobile(e.target.value)}
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
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>

                  <h2 class="section-break"></h2>

                  <div class="row">
                    <h3>Add Information :</h3>
                    <div class="col">
                      {/* <label for="order-details"> Order Details</label> */}
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Enter Message"
                        id="Message"
                        name="Message"
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  {errorMessages.length > 0 && (
                    <div style={{ color: "red", fontWeight: "700" }}>
                      <ul>
                        {errorMessages.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button type="submit" class="submit-button mt-3">
                    SUBMIT REVIEW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="review">

        <h1 class="text-center">Our Review</h1>
        <p class="text-center">
              Thanks for giving us a good review....We really appreciate it.
        </p>

        <div class="review_line_1"></div>


        <div class="review_box">

          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>
          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>
          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>
          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>
          

          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>

          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>

          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>

          <div class="review_card">
            <div class="review_tag">
              <h2>Name</h2>
              <p class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium cupiditate deserunt odio in fugiat dolore!
                Veniam sit quod iusto quas eligendi. Natus numquam
                aspernatur alias illo voluptates dolorem, id ad.
              </p>
              <button class="submit-button">Raed more</button>
            </div>
          </div>
          
          

        </div>

      </div>

    </>
  );
}

export default Review;
