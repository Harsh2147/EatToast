import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
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
  return (
    <>
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
    </>
  );
}

export default Header;
