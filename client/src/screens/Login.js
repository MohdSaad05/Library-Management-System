import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch, useSelector } from "react-redux";
import StudentIMage from "../Images/student4.jpg";
const Login = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const dispatch = useDispatch();

  const PostData = () => {
    const user = { password, roll_no };
    dispatch(loginUser(user));
  };

  const handleShow = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          display: "flex",
          alignItem: "center",
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
          <p style={{ color: "white", fontWeight: "800", textAlign: "center" }}>
            Welcome to Libary Management System
          </p>
          <img
            src={StudentIMage}
            alt="StudentIMage"
            style={{ height: "140px", width: "140px", borderRadius: "50%" }}
          />
          <div style={{ marginTop: "20px", width: "80%" }}>
            <input
              type="text"
              className="form-control"
              style={{ height: "60px", borderRadius: "20px", width: "100%" }}
              placeholder="roll_no"
              value={roll_no}
              onChange={(e) => setRoll_no(e.target.value)}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <input
              type="text"
              style={{ height: "60px", borderRadius: "20px", width: "100%" }}
              className="form-control"
              type={show}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              style={{ marginTop: "1px", marginRight: "-40px" }}
              className="fas fa-eye"
              onClick={() => handleShow()}
            ></i>
          </div>
          <br />

          <button
            style={{
              width: "80%",
              height: "60px",
              color: "white",
              borderRadius: "20px",
              backgroundColor: "red",
            }}
            onClick={() => PostData()}
          >
            Login
          </button>
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
          If you don't have account then plz{" "}
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
  );
};

export default Login;
