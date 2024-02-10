import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphql/LoginMutation";

function Login() {
  const navigate = useNavigate();
  // Check if loginData exists in localStorage
  const loginData = localStorage.getItem("loginData");
  console.log("Login Data= " + loginData);
  useEffect(() => {
    // Define the logout function
    if (!loginData && loginData == null) {
      navigate("/Login");
      //alert(`Please Login First`);
    }
  }, []);
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("ADMIN");
  const [errorMessages, setErrorMessages] = useState([]);

  const [checkExistingUser] = useMutation(LOGIN_MUTATION);
  const validateForm = () => {
    const errors = [];

    if (!email) {
      errors.push("Email field is required");
    }
    if (!password) {
      errors.push("Password is required");
    }
    if (!usertype || usertype === "") {
      errors.push("Usertype is required");
    }

    setErrorMessages(errors);
    return errors.length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const { data } = await checkExistingUser({
          variables: { email, password, usertype },
        });

        if (data.checkExistingUser) {
          localStorage.setItem("loginData", JSON.stringify(data));

          navigate("/Dashboard");
        }
      } catch (error) {
        if (error.message.includes("User not found")) {
          setErrorMessages([
            `User notfound, please enter the right credentials or signup `,
          ]);
        }

        if (error.message.includes("Invalid password")) {
          setErrorMessages([`Invalid password, try again `]);
        }
        return;
      }
    }
  };

  return (
    <>
      <div class="container ">
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
            {loginData && (
              <>
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
                      <a href="/Logout">Logout</a>
                    </span>
                  </a>
                </li>
              </>
            )}
            {!loginData && (
              <>
                <li>
                  <a href="#">
                    <span class="icon">
                      <ion-icon name="exit-outline"></ion-icon>
                    </span>
                    <span class="title">
                      <a href="/Registration">Register Here</a>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <ion-icon name="exit-outline"></ion-icon>
                    </span>
                    <span class="title">
                      <a href="/Login">Login</a>
                    </span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div class="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div class="card">
            <div class="card-header p-3">
              <h4>Login</h4>
            </div>

            <div class="card-body">
              {errorMessages.length > 0 && (
                <div style={{ color: "red" }}>
                  <ul>
                    {errorMessages.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <form method="post" action="" onSubmit={handleLogin}>
                <div class="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                <div class="form-group mb-3">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="col-sm-11" class="formcontainer">
                  <label htmlFor="Usertype" className="form-label">
                    Usertype
                  </label>
                  <select
                    id="usertype"
                    className="form-control"
                    type="text"
                    name="usertype"
                    value={usertype}
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
                  value="Login"
                  style={{ margin: "0 auto" }}
                />

                <p>
                  Not yet a member? <a href="/Registration">Register Here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
