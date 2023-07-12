import { useEffect, useState } from "react";
import "./account.css";
import Connexion from "./Connexion/connexion";
import ProfileSVG from "../../components/Svg/profile";

interface Account {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  age: number;
}

function AccountPage({ account }: { account: Account | undefined }) {
  useEffect(() => {
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
      var counter = 0;
      var value = number.getAttribute("data-value");
      if (value !== null) {
        var numericValue = parseInt(value, 10);
        var interval = setInterval(() => {
          counter++;
          if (counter < numericValue) {
            number.innerHTML = counter.toString();
          }
        }, 100);
      }
    });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("LoggedIn");
    sessionStorage.removeItem("email");
    window.location.href = "/account";
  };
  return (
    <div className="account">
      <div className="account-right">
        <h1>My Dashboard</h1>
        <div className="account-user">
          <ProfileSVG />
          <p className="title">Welcome back.</p>
          <p className="info">
            {sessionStorage.getItem("firstname")}{" "}
            {sessionStorage.getItem("lastname")?.slice(0, 1)}.
          </p>
        </div>
        <div className="account-button">
          <button>Edit Profile</button>
          <button>Change Password</button>
          <button>Delete Account</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="account-middle">
        <div>
          <h2>My Sessions</h2>
          <p className="number" data-value={15}>
            0
          </p>
        </div>
        <div>
          <h2>Week Sessions's</h2>
          <p className="number" data-value={7}>
            0
          </p>
        </div>
        <div>
          <h2>Exercises Realised</h2>
          <p className="number" data-value={7}>
            0
          </p>
        </div>
        <div>
          <h2>Programs Realised</h2>
          <p className="number" data-value={3}>
            0
          </p>
        </div>
      </div>
    </div>
  );
}
function Account() {
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/1`)
      .then((response) => response.json())
      .then((data) => {
        setAccount(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return sessionStorage.getItem("LoggedIn") === "true" ? (
    <AccountPage account={account} />
  ) : (
    <Connexion />
  );
}

export default Account;
