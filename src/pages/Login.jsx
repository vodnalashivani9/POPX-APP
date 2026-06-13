import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      navigate("/account");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>
        Signin to your <br />
        PopX account
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="login-btn"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;