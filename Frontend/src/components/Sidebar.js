import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/user_action";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userLoginReducer);
  return (
    <div style={{ marginTop: "10%" }}>
      <ul>
        <li className="list_item">
          {" "}
          <i className="fas fa-home text-white"></i>{" "}
          <Link
            to="/dashboard/"
            style={{
              textDecoration: "none",
              color:"blue",
              fontSize: "20px",
              marginLeft: "5px",
              fontFamily: "Nunito",
              cursor: "pointer",
            }}
          >
            {" "}
            Home{" "}
          </Link>{" "}
        </li>
        <hr style={{ color: "white" }} />

        <li>
          {" "}
          <i className="fas fa-address-book text-white"></i>
          <Link
            to="/dashboard/allBook"
            style={{
              textDecoration: "none",
             // color: "#f1f1f1",
             color:"blue",
              fontSize: "20px",
              marginLeft: "5px",
              fontFamily: "Nunito",
              cursor: "pointer",
            }}
          >
            {" "}
            Book Collection{" "}
          </Link>{" "}
        </li>
        <hr style={{ color: "white" }} />

        {currentUser.user.isAdmin ? (
          <>
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>
              <Link
                to="/dashboard/addBook"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Register New Book{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-users text-white"></i>
              <Link
                to="/dashboard/manageStudent"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Facilitate Student{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            {/* <li>
              {" "}
              <i className="fas fa-users text-white"></i>
              <Link
                to="/dashboard/manageStudent"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Add Book Numbers{" "}
              </Link>{" "}
            </li> */}
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-registered text-white"></i>
              <Link
                to="/dashboard/manageStudent"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Issue Request{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/Recommandation"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Book Suggestion{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/allissuedBook"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                List of All Issued Books{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
           
            <li>
              {" "}
              <i className="fas fa-users text-white"></i>{" "}
              <Link
                to="/dashboard/addEmployee"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Add Member
                {" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
          </>
        ) : (
          <>
            
            <li>
              {" "}
              <i className="fas fa-book text-white"></i>{" "}
              <Link
                to="/dashboard/issuedBook"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Active Book Loans
              </Link>{" "}
            </li>
           
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fas fa-registered text-white"></i>
              <Link
                to="/dashboard/RecomBook"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Book Suggestion{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
            <li>
              {" "}
              <i className="fa fa-credit-card text-white"></i>
              <Link
                // to="/dashboard/RecomBook"
                style={{
                  textDecoration: "none",
                  color:"blue",
                  fontSize: "20px",
                  marginLeft: "5px",
                  fontFamily: "Nunito",
                  cursor: "pointer",
                }}
              >
                {" "}
                Fine Payment{" "}
              </Link>{" "}
            </li>
            <hr style={{ color: "white" }} />
          </>
        )}

        <li onClick={() => dispatch(logoutUser())}>
          {" "}
          <i className="fas fa-power-off text-white"></i>
          <span
            style={{
              fontSize: "20px",
              // color: "#fff",
              color:"blue",
              marginLeft: "2px",
              fontFamily: "Nunito",
              cursor: "pointer",
            }}
          >
            {" "}
            Logout{" "}
          </span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

































