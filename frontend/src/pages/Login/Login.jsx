import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
  };

  const LoginData = async () => {
    try {
      if (!email) {
        toast.error("Please Provide the Email");
      }
      if (!password) {
        toast.error("Please Provide the Password");
      }
      const result = await axios.post(
        `http://localhost:8080/api/v1/user/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log(result.data);
      localStorage.getItem("user", JSON.stringify(result.data));
      navigate("/");
      toast.success("Logined SuccessFully");
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="login_form">
        <h2>Login</h2>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email...."
          className="login_input"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password...."
          className="login_input"
        />
        <button onClick={LoginData} className="login_button">
          Login
        </button>
      </form>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default Login;
