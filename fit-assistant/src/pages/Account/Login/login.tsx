import { useState } from "react";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // Effectuer la vérification de la connexion ici
    fetch(`http://localhost:8080/api/user/check`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          sessionStorage.setItem("LoggedIn", true.toString());
          sessionStorage.setItem("email", email);
          window.location.href = "/"; // Rediriger vers le dashboard
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
