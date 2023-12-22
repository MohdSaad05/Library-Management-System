import React from "react";
import { Link } from "react-router-dom";
import StudentIMage from "../Images/student4.jpg";
import AdminIMage from "../Images/admin2.jpg";

const Home = () => {
  return (
    <div className="HomePage">
      <div>
        <h1
          style={{
            fontSize: "30px",
            marginTop: "14px",
            fontWeight: "700",
            color: "red",
          }}
        >
          Libaray Magement System
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5%",
          borderRadius: "20px",
          gap: "20px",
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
            <h3 style={{ fontFamily: "Nunito" }}>Signin as Admin</h3>
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
            <h3 style={{ fontFamily: "Nunito" }}>Signin as Student</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
