import React, { useEffect, useState } from "react";
function Dashboard() {
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
      <body>
        {/* admin-navigation start here */}
        <div class="container">
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

          <div class="main">
            <div class="dashbox">
              <div class="card">
                <div>
                  <div class="numbers">1,504</div>
                  <div class="dashboxName">Customer</div>
                </div>

                <div class="dashboxicon">
                  <ion-icon name="person"></ion-icon>
                </div>
              </div>

              <div class="card">
                <div>
                  <div class="numbers">80</div>
                  <div class="dashboxName">Order</div>
                </div>

                <div class="dashboxicon">
                  <ion-icon name="cart"></ion-icon>
                </div>
              </div>

              <div class="card">
                <div>
                  <div class="numbers">8</div>
                  <div class="dashboxName">Employee</div>
                </div>

                <div class="dashboxicon">
                  <ion-icon name="person"></ion-icon>
                </div>
              </div>

              <div class="card">
                <div>
                  <div class="numbers">$7,842</div>
                  <div class="dashboxName">Earning</div>
                </div>

                <div class="dashboxicon">
                  <ion-icon name="cash-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div class="details">
              <div class="latestOrder">
                <div class="cardHeader">
                  <h2>Recent Orders</h2>
                  <a href="#" class="btn btn-primary">
                    View All
                  </a>
                </div>

                <table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Payment</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Prince</td>
                      <td>$1200</td>
                      <td>Paid</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$110</td>
                      <td>Due</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$1200</td>
                      <td>Paid</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$620</td>
                      <td>Due</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$1200</td>
                      <td>Paid</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$110</td>
                      <td>Due</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$1200</td>
                      <td>Paid</td>
                    </tr>

                    <tr>
                      <td>Harsh</td>
                      <td>$620</td>
                      <td>Due</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Dashboard;
