import React from "react";
import { Navbar } from "../components/Navbar";

function User({ children }) {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
}

export default User;
