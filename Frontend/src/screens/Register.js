import SignInForm from "../components/Form/Register";

const Register = () => {
  return (
    <div>
      <div className="LoginPage"></div>
      <div>
        <p style={{ color: "white", fontWeight: "800", textAlign: "center" }}>
          Welcome to Libary Management System
        </p>

        <SignInForm />
      </div>
    </div>
  );
};

export default Register;
