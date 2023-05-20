import { useEffect, useState } from "react";
import "./account.css";
import Record from "../../components/Account/Record/record";
import Training from "../../components/Account/Training/training";
import Connexion from "./Connexion/connexion";
import AccountSVG from "../../components/Svg/account";
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
  return (
    <div className="account">
      <div className="account-right">
        <h1>My Dashboard</h1>
        <div className="account-user">
          <ProfileSVG />
          <p className="title">Welcome back.</p>
          <p className="info">
            {account?.firstname} {account?.lastname[0]}.
          </p>
        </div>
      </div>
      <div className="account-middle"></div>
    </div>
    // <div className={"account"}>
    //   <div className="account-middle">
    //     <div className="account-middle-top">
    //       <div className="account-middle-top-informations">
    //         <h1>{account?.username}</h1>
    //         <p>
    //           {account?.firstname} {account?.lastname}
    //         </p>
    //         <p>{account?.email}</p>
    //       </div>
    //       <div className="account-middle-top-picture">
    //         <div className="picture-circle">
    //           <Account />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="account-middle-bottom">
    //       <h2>Last Trainings</h2>
    //       <div className="horizontal-scrollable-list">
    //         <Training
    //           date="02/02/2022"
    //           exercises={3}
    //           categories={[{ id: 1, name: "Back" }]}
    //         />
    //         <Training
    //           date="02/02/2022"
    //           exercises={3}
    //           categories={[{ id: 1, name: "Back" }]}
    //         />
    //         <Training
    //           date="02/02/2022"
    //           exercises={3}
    //           categories={[{ id: 1, name: "Back" }]}
    //         />
    //         <Training
    //           date="02/02/2022"
    //           exercises={3}
    //           categories={[{ id: 1, name: "Back" }]}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="account-column">
    //     <h2>Personal Records</h2>
    //     <div className="vertical-scrollable-list">
    //       <Record
    //         exercise="Pull Up"
    //         weight={100}
    //         repetitions={12}
    //         date="12/02/2023"
    //       />
    //       <Record
    //         exercise="Pull Up"
    //         weight={100}
    //         repetitions={12}
    //         date="12/02/2023"
    //       />
    //       <Record
    //         exercise="Pull Up"
    //         weight={100}
    //         repetitions={12}
    //         date="12/02/2023"
    //       />
    //       <Record
    //         exercise="Pull Up"
    //         weight={100}
    //         repetitions={12}
    //         date="12/02/2023"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
function Account() {
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/1`)
      .then((response) => response.json())
      .then((data) => {
        setAccount(data);
        console.log(data);
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
