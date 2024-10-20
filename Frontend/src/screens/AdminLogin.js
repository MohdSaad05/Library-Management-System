import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch } from "react-redux";
import AdminIMage from "../Images/admin3.png"; 

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("password");
  const [roll_no, setRoll_no] = useState("");
  const dispatch = useDispatch();

  const PostData = () => {
    const user = { password, roll_no };
    dispatch(loginUser(user));
  };

  const handleShow = () => {
    setShow(show === "password" ? "text" : "password");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", 
        backgroundColor: "#d3e4e8", 
      }}
    >
      <div
        style={{
          width: "450px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ fontWeight: "700", textAlign: "center", marginBottom: "40px", fontSize: "35px", color: "#6925c2" }}>
            
            Welcome Admin! Please Log In to Continue
          </p>

          <div
            style={{
              border: "2px solid #fafaf2", 
              borderRadius: "10px",
              padding: "20px", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%", 
              backgroundColor: "#ffffff", 
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", // Shadow effect
            }}
          >
            <img
              src={AdminIMage}
              alt="Admin"
              style={{ height: "140px", width: "140px", borderRadius: "30%", marginBottom: "20px" }} // Image inside border
            />
            <div style={{ marginTop: "20px", width: "100%" }}>
              <input
                type="text"
                className="form-control"
                style={{ height: "60px", borderRadius: "20px", width: "100%", marginBottom: "10px" }}
                placeholder="Employee ID"
                value={roll_no}
                onChange={(e) => setRoll_no(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <input
                  style={{ height: "60px", borderRadius: "20px", width: "100%" }}
                  className="form-control"
                  type={show}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  style={{ marginTop: "1px", marginRight: "-40px", cursor: "pointer" }}
                  className="fas fa-eye"
                  onClick={handleShow}
                ></i>
              </div>

             
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button
                  style={{
                    width: "80%",
                    height: "60px",
                    color: "white",
                    borderRadius: "25px",
                    backgroundColor: "blue",
                  }}
                  onClick={PostData}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <br />
          <Link
            to="/register"
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              color: "black",
              textDecoration: "none",
            }}
          >
            If you don't have an account then please{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>Register</span>
          </Link>
          <Link
            to="/"
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              color: "blue",
              textDecoration: "none",
            }}
          >
            Go To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
