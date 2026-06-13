import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to PopX</h1>

      <p>Lorem ipsum dolor sit amet.</p>

      <button
        className="primary-btn"
        onClick={() => navigate("/register")}
      >
        Create Account
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;