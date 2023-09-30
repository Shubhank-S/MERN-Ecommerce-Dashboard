import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existedUser = localStorage.getItem("user");
    if (existedUser) {
      navigate("/");
      toast.error("User Already Exist");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
  };

  const RegisterData = async () => {
    try {
      const result = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      console.log(result.data);
      localStorage.setItem("user", JSON.stringify(result.data));
      navigate("/");
      toast.success("Registered SuccessFully");
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <>
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
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default Register;
