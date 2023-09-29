import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name...."
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email...."
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password...."
        />
        <button onClick={RegisterData}>Register</button>
      </form>
    </>
  );
}

export default Register;
