import React, { useEffect } from "react";
import { userProfile } from "../actions/user_action";
import { useDispatch, useSelector } from "react-redux";
import Image from "../Images/student3.png";
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
          alt="saad mirza"
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
        <div style={{ border: "2px solid #fafaf2",
               borderRadius: "10px",
               padding: "20px", 
               backgroundColor: "white", 
               boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>
          {currentUser && currentUser[0] && currentUser[0].isAdmin ? (
            <p style={{ fontSize: "22px", color: "black" }}>
              {" "}
              <b>Employee Id : </b>
              {currentUser && currentUser[0] && currentUser[0].roll_no}
            </p>
          ) : (
            <>
              <p style={{ fontSize: "22px", color: "black" }}>
                {" "}
                <b> Email Id :</b>{" "}
                {currentUser && currentUser[0] && currentUser[0].email}
              </p>
              
              <p style={{ fontSize: "22px", color: "black" }}>
                {" "}
                <b>Enrollment No : </b>
                {currentUser && currentUser[0] && currentUser[0].roll_no}
              </p>
              <p style={{ fontSize: "22px", color: "black" }}>
                <b>Branch : </b>
                {currentUser && currentUser[0] && currentUser[0].branch}
              </p>
              <p style={{ fontSize: "22px", color: "black" }}>
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
