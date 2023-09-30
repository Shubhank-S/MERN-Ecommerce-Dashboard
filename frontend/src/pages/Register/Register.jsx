import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const existedUser = localStorage.getItem("user");
    if (existedUser) {
      navigate("/");
      toast.error("User Already Exist");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
  };

  const RegisterData = async () => {
    try {
      if (!name) {
        toast.error("Please Provide the Name");
      }
      if (!email) {
        toast.error("Please Provide the Email");
      }
      if (!password) {
        toast.error("Please Provide the Password");
      }
      const result = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      localStorage.setItem("user", JSON.stringify(result.data));
      toast.success("Registered SuccessFully");
      navigate("/");
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form onSubmit={handleSubmit} className="register_form">
        <h2>Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name...."
          className="register_input"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email...."
          className="register_input"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password...."
          className="register_input"
        />
        <button onClick={RegisterData} className="register_button">
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
