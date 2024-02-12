import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { FETCH_CATEGORY_BY_ID } from "../../graphql/FetchCatById";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { DELETE_CATEGORY_BY_ID } from "../../graphql/DeleteCategoryById";
function Deletecategory() {
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

  const [category_name, setcategory_name] = useState("");
  const [errorl, setError] = useState(false);
  const [deleteCat, { loading1, error1, data1 }] = useMutation(
    DELETE_CATEGORY_BY_ID
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteCat({
      variables: {
        catId: id,
        updated_cat: {
          category_name: category_name,
        },
      },
      refetchQueries: [{ query: FETCH_ALL_CATEGORIES }],
    });

    if (category_name.length === 0) {
      setError(true);
    } else {
      navigate("/Viewcategory");
    }

    alert("Catrgory Deleted Successfully");
  };
  const [user, setUser] = useState({
    category_name: "",
  });
  const { id } = useParams();
  console.log(`url parameter:${id}`);

  const { loading, error, data } = useQuery(FETCH_CATEGORY_BY_ID, {
    variables: { catId: id },
  });
  useEffect(() => {
    setcategory_name(localStorage.getItem("category_name"));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
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
            )}
          </ul>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header p-3">
              <h4>Update Category</h4>
            </div>

            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-3">
                  <label>Name : {category_name}</label>
                </div>

                <input
                  type="submit"
                  className="btn btn-danger "
                  value="Are your Sure to Delete this Category"
                  style={{ margin: "0 auto" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deletecategory;
