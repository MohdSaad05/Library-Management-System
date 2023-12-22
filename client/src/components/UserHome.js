import React, { useEffect } from "react";
import { userProfile } from "../actions/user_action";
import { useDispatch, useSelector } from "react-redux";
import Image from "../Images/profile2.png";
const UserHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, []);
  const { currentUser } = useSelector((state) => state.userProfileReducer);
  console.log("UserHome", currentUser);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={Image}
          alt="ajay kumar gupta"
          style={{
            height: "150px",
            width: "150px",
            // borderRadius: "50%",
            marginBlock: "15px",
          }}
        />
        <h3 style={{ textAlign: "center" }}>
          {currentUser && currentUser[0] && currentUser[0].name}
        </h3>
        <div style={{ backgroundColor: "#000", padding: "20px" }}>
          {currentUser && currentUser[0] && currentUser[0].isAdmin ? (
            <p style={{ fontSize: "22px", color: "white" }}>
              {" "}
              <b>Employee Id : </b>
              {currentUser && currentUser[0] && currentUser[0].roll_no}
            </p>
          ) : (
            <>
              <p style={{ fontSize: "22px", color: "white" }}>
                {" "}
                <b> Email Id :</b>{" "}
                {currentUser && currentUser[0] && currentUser[0].email}
              </p>
              <p style={{ fontSize: "22px", color: "white" }}>
                {" "}
                <b>Phone Number :</b>{" "}
                {currentUser && currentUser[0] && currentUser[0].phone_no}
              </p>
              <p style={{ fontSize: "22px", color: "white" }}>
                {" "}
                <b>Enrollment No : </b>
                {currentUser && currentUser[0] && currentUser[0].roll_no}
              </p>
              <p style={{ fontSize: "22px", color: "white" }}>
                <b>Branch : </b>
                {currentUser && currentUser[0] && currentUser[0].branch}
              </p>
              <p style={{ fontSize: "22px", color: "white" }}>
                {" "}
                <b>Addmission Year :</b>{" "}
                {currentUser &&
                  currentUser[0] &&
                  currentUser[0].addmission_year}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
