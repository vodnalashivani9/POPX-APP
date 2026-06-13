import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
const navigate = useNavigate();

const [user, setUser] = useState({
name: "",
phone: "",
email: "",
password: "",
company: "",
agency: "Yes",
});

const handleChange = (e) => {
setUser({
...user,
[e.target.name]: e.target.value,
});
};

const handleSubmit = () => {
localStorage.setItem("user", JSON.stringify(user));
navigate("/login");
};

return ( <div className="container"> <h1 className="title">
Create your <br />
PopX account </h1>


  <div className="form-section">
    <div className="input-group">
      <label>Full Name*</label>
      <input
        type="text"
        name="name"
        placeholder="Enter full name"
        onChange={handleChange}
      />
    </div>

    <div className="input-group">
      <label>Phone Number*</label>
      <input
        type="text"
        name="phone"
        placeholder="Enter phone number"
        onChange={handleChange}
      />
    </div>

    <div className="input-group">
      <label>Email Address*</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email address"
        onChange={handleChange}
      />
    </div>

    <div className="input-group">
      <label>Password*</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
    </div>

    <div className="input-group">
      <label>Company Name</label>
      <input
        type="text"
        name="company"
        placeholder="Enter company name"
        onChange={handleChange}
      />
    </div>

    <div className="radio-group">
      <p>Are you an Agency?*</p>

      <div className="radio-options">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={user.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={user.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>
    </div>
  </div>

  <button className="create-btn" onClick={handleSubmit}>
    Create Account
  </button>
</div>


);
}

export default Register;
