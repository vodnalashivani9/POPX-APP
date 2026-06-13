import "../styles/Account.css";

function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="account-container">
      <div className="heading">Account Settings</div>

      <div className="profile">
        <div className="avatar-wrapper">
          <img
            src={user.photo || "https://i.pravatar.cc/150"}
            alt="profile"
          />
          <span className="camera-icon">
            {/*Proper camera SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 5h-3.17l-1.41-1.41C15.21 3.21 
                       14.7 3 14.17 3H9.83c-.53 0-1.04.21-1.41.59L7 
                       5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                       2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 
                       13c-2.76 0-5-2.24-5-5s2.24-5 
                       5-5 5 2.24 5 5-2.24 5-5 5z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
          </span>
        </div>
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="description">
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, sed Diam
        </p>
      </div>
    </div>
  );
}

export default Account;
