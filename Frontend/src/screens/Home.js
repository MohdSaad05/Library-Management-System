import React from "react";
import { Link } from "react-router-dom";
import StudentIMage from "../Images/student5.png";
import AdminIMage from "../Images/admin3.png";

const Home = () => {
  return (
    <div className="HomePage" style={{background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
      <div>
        <h1
          style={{
            fontSize: "35px",
            marginTop: "14px",
            fontWeight: "700",
            color: "#6925c2",
          }}
        >
          Welcome to the Library Management System
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5%",
          borderRadius: "20px",
         
          // gap: "20px",
          gap: "60px",
        }}
      >
        <div
          className="card"
          style={{
            height: "350px",
            width: "250px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "30px",
            backgroundColor: "#d3e4e8",
          }}
        >
          <img
            src={AdminIMage}
            alt="StudentIMage"
            style={{ height: "180px", width: "180px" }}
          />
          <br />
          <Link className="link_class" to="/adminLogin">
            {" "}
            <h3 style={{ fontFamily: "Nunito" }}>Admin Sign-In</h3>
          </Link>
        </div>
        <div
          className="card"
          style={{
            height: "350px",
            width: "250px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "30px",
            backgroundColor: "#d3e4e8",
          }}
        >
          <img
            src={StudentIMage}
            alt="StudentIMage"
            style={{ height: "180px", width: "180px" }}
          />
          <br />
          <Link className="link_class" to="/login">
            {" "}
            <h3 style={{ fontFamily: "Nunito" }}>Student Sign-In</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
