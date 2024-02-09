import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTRATION_MUTATION } from "../../graphql/RegistrationMutation";
import { useMutation, useQuery } from "@apollo/client";

function Registration() {
  const [showCategorySubMenu, setShowCategorySubMenu] = useState(false);
  const [showItemsSubMenu, setShowItemsSubMenu] = useState(false);
  const [showOrdersSubMenu, setShowOrdersSubMenu] = useState(false);

  const handleManageCategoryClick = (event) => {
    event.preventDefault();
    setShowCategorySubMenu(!showCategorySubMenu);
  };

  const handleManageItemsClick = (event) => {
    event.preventDefault();
    setShowItemsSubMenu(!showItemsSubMenu);
  };
  const handleManageOrdersClick = (event) => {
    event.preventDefault();
    setShowOrdersSubMenu(!showOrdersSubMenu);
  };
  const navigate = useNavigate();
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [Usertype, setUsertype] = useState("ADMIN");
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [registration, { error, data }] = useMutation(REGISTRATION_MUTATION);

  const validateForm = async () => {
    const errors = [];

    if (!Firstname) {
      errors.push("Firstname field is required");
    }
    if (!Lastname) {
      errors.push("Lastname field is required");
    }
    if (!email) {
      errors.push("email field is required");
    }
    if (!Address) {
      errors.push("Address is required");
    }
    if (!Mobile) {
      errors.push("Mobile is required");
    }
    if (!Password) {
      errors.push("Password is required");
    }
    if (!Usertype) {
      errors.push("Usertype is required");
    }

    setErrorMessages(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const result = await registration({
          variables: {
            userInput: {
              Firstname,
              Mobile: parseInt(Mobile),
              Lastname,
              email,
              Address,
              Password,
              Usertype,
            },
          },
        });
        console.log("result.data " + result.data);
        console.log("result.data.signupUser " + result.data.signupUser);
        if (result.data && result.data.signupUser) {
          alert("Successful");
          navigate("/Login");
        }
      } catch (error) {
        // Check if the error message is related to an existing user
        if (
          error.message.includes(
            "User with the provided email and usertype already exists."
          )
        ) {
          setErrorMessages([
            `User with the provided email and usertype already exists. will you like to login? `,
          ]);
        }
        return;
      }
    }
  };
  return (
    <>
      <div className="container">
        <div class="admin-navigation">
          <ul>
            <li>
              <a href="#">
                <span class="title">EatToast</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Dashboard">Dashboard</a>
                </span>
              </a>
            </li>
            <li className="manage-category">
              <a href="#" onClick={handleManageCategoryClick}>
                <span className="icon">
                  <ion-icon name="fast-food-outline"></ion-icon>
                </span>
                <span className="title">Manage Category</span>
              </a>
            </li>
            {showCategorySubMenu && (
              <>
                <ul>
                  <li>
                    <a href="/Addcategory">
                      <span className="title">Add Category</span>
                    </a>
                  </li>
                  <li>
                    <a href="/Viewcategory">
                      <span className="title">View Category</span>
                    </a>
                  </li>
                </ul>
              </>
            )}
            <li className="manage-items">
              <a href="#" onClick={handleManageItemsClick}>
                <span className="icon">
                  <ion-icon name="restaurant"></ion-icon>
                </span>
                <span className="title">Manage Items</span>
              </a>
            </li>
            {showItemsSubMenu && (
              <>
                <ul>
                  <li>
                    <a href="/Additems">
                      <span className="title">Add Items</span>
                    </a>
                  </li>
                  <li>
                    <a href="/Viewproduct">
                      <span className="title">View Product</span>
                    </a>
                  </li>
                </ul>
              </>
            )}
            <li className="manage-orders">
              <a href="#" onClick={handleManageOrdersClick}>
                <span className="icon">
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
                <span className="title">Manage Orders</span>
              </a>
            </li>
            {showOrdersSubMenu && (
              <>
                <ul>
                  <li>
                    <a href="/Vieworders">
                      {" "}
                      <span className="title">View Order</span>
                    </a>
                  </li>
                </ul>
              </>
            )}

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="exit-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Login">Log out</a>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header p-3">
              <h4>Registration Form</h4>
            </div>
            <div className="card-body">
              {errorMessages.length > 0 && (
                <div style={{ color: "red" }}>
                  <ul>
                    {errorMessages.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="Firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="Firstname"
                    className="form-control"
                    name="Firstname"
                    value={Firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastname" className="form-label">
                    lastname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Lastname"
                    name="Lastname"
                    value={Lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Mobile" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="number"
                    id="Mobile"
                    className="form-control"
                    name="Mobile"
                    value={Mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="Address"
                    className="form-control"
                    name="Address"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    id="Password"
                    className="form-control"
                    name="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="Usertype" className="form-label">
                    Usertype
                  </label>
                  <select
                    id="Usertype"
                    className="form-control"
                    type="text"
                    name="Usertype"
                    value={Usertype}
                    onChange={(e) => setUsertype(e.target.value)}
                  >
                    <option value="ADMIN">ADMIN</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                  </select>
                </div>
                <input
                  type="submit"
                  class="btn btn-primary "
                  value="Register"
                  style={{ margin: "0 auto" }}
                />
                <p>
                  Already a registered? <a href="/Login">Log in</a>
                </p>
                <p>
                  Go to Dashboard <a href="/Dashboard">Dashboard</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
