import React from "react";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("loginData");

    navigate("/Login");
  };
  return <div>Logout</div>;
}

export default Logout;
