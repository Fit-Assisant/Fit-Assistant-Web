import { useEffect, useState } from "react";
import "./connexion.css";

function Connexion() {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton?.addEventListener("click", () => {
      container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener("click", () => {
      container?.classList.remove("right-panel-active");
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLastnameChange = (event: any) => {
    setLastname(event.target.value);
  };

  const handleFirstnameChange = (event: any) => {
    setFirstname(event.target.value);
  };

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegisterSubmit = (event: any) => {
    event.preventDefault();
    if (password == confirmPassword) {
      fetch(`http://localhost:8080/api/user/create`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          lastname,
          firstname,
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status == 201) {
          sessionStorage.setItem("LoggedIn", true.toString());
          sessionStorage.setItem("email", email);
          window.location.href = "/"; // Rediriger vers le dashboard
        }
      });
    }
  };

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
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
    <div className="logger">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={handleFirstnameChange}
            />
            <input
              type="text"
              placeholder="Lastname"
              onChange={handleLastnameChange}
            />
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsernameChange}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordChange}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
