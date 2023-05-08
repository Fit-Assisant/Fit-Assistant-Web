import { useEffect, useState } from "react";
import "./account.css";
import Record from "../../components/Account/Record/record";
import Training from "../../components/Account/Training/training";

interface Account {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  age: number;
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
  return (
    <div className={"account"}>
      <div className="account-middle">
        <div className="account-middle-top">
          <div className="account-middle-top-informations">
            <h1>{account?.username}</h1>
            <p>
              {account?.firstname} {account?.lastname}
            </p>
            <p>{account?.email}</p>
          </div>
          <div className="account-middle-top-picture">
            <div className="picture-circle">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <g id="Shopicon">
                  <path
                    d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
		c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
		s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="account-middle-bottom">
          <h2>Last Trainings</h2>
          <div className="horizontal-scrollable-list">
            <Training
              date="02/02/2022"
              exercises={3}
              categories={[{ id: 1, name: "Back" }]}
            />
            <Training
              date="02/02/2022"
              exercises={3}
              categories={[{ id: 1, name: "Back" }]}
            />
            <Training
              date="02/02/2022"
              exercises={3}
              categories={[{ id: 1, name: "Back" }]}
            />
            <Training
              date="02/02/2022"
              exercises={3}
              categories={[{ id: 1, name: "Back" }]}
            />
          </div>
        </div>
      </div>
      <div className="account-column">
        <h2>Personal Records</h2>
        <div className="vertical-scrollable-list">
          <Record
            exercise="Pull Up"
            weight={100}
            repetitions={12}
            date="12/02/2023"
          />
          <Record
            exercise="Pull Up"
            weight={100}
            repetitions={12}
            date="12/02/2023"
          />
          <Record
            exercise="Pull Up"
            weight={100}
            repetitions={12}
            date="12/02/2023"
          />
          <Record
            exercise="Pull Up"
            weight={100}
            repetitions={12}
            date="12/02/2023"
          />
        </div>
      </div>
    </div>
  );
}

export default Account;
