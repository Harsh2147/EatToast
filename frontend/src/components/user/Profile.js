import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CUSTOMER_EXIST_QUERY } from "../../graphql/CheckExistingCustomer";
import Header from "./Header";

function Profile() {
  const navigate = useNavigate();
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [Message, setMessage] = useState("");
  const [Mobile, setMobile] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [dataQ, { loading, errorQ }] = useMutation(CUSTOMER_EXIST_QUERY);
  return (
    <>
      {/* header section start from here */}
      <Header />
      {/* header section end here */}

      
      <div class="oder">
       

        <div class="oder_main mt-5">
          <div class="profile_img">
            <img src="/img/profile.png"></img>
          </div>

          <div class="oder_form">
            <div class="form-row row">
              <div class="form-container  ">
                <form class="checkout-form">
                  <h3 class="text-center">Profile</h3>

                  <div class="row">
                    <h3>Personal Information :</h3>
                    <div class="col">
                      <label for="first-name"> First Name</label>

                      <input
                        id="Firstname"
                        type="text"
                        readOnly
                        className="form-control"
                        placeholder="Enter First name"
                        name="Firstname"
                        value={Firstname}
                      />
                    </div>

                    <div class="col">
                      <label for="first-name"> Last Name</label>
                      <input
                        id="Lastname"
                        type="text"
                        readOnly
                        className="form-control"
                        placeholder="Enter Last name"
                        name="Lastname"
                        value={Lastname}
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <label for="pnumber"> Phone number</label>

                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="Enter phone number"
                        id="Mobile"
                        name="Mobile"
                        value={Mobile}
                      />
                    </div>

                    <div class="col">
                      <label for="email"> Email</label>

                      <input
                        type="Email"
                        readOnly
                        className="form-control"
                        placeholder="Enter Email"
                        id="email"
                        name="email"
                        value={email}
                      />
                    </div>
                  </div>

                  <h2 class="section-break"></h2>

                  <div class="row">
                    <h3>Address :</h3>

                    <div class="col">

                      <label for="Adress 1"> Address 1</label>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="Address1"
                        id="Address1"
                        name="Address1"
                      />
                    </div>
                    <div class="col">
                      <label for="Adress 2"> Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="Address2"
                        id="Address2"
                        name="Address2"
                      />
                    </div>{" "}
                  </div>
                  <div class="row">
                    <div class="col">
                      <label for="Postal Code"> Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="PostalCode"
                        id="PostalCode"
                        name="PostalCode"
                      />
                    </div>
                    <div class="col">
                      <label for="State"> State</label>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="State"
                        id="State"
                        name="State"
                      />
                    </div>{" "}
                  </div>
                  <div class="row">
                    <div class="col">
                      <label for="Country"> Country</label>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="Country"
                        id="Country"
                        name="Country"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Profile;
