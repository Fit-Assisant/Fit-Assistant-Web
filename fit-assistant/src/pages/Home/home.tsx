import "./home.css";
import GymAddictSVG from "../../components/Svg/gym-addict";

function Home() {
  return (
    <div className="home">
      <input className="searchbar" type="text" placeholder="🔍 Search" />
      {sessionStorage.getItem("LoggedIn") === "true" && (
        <div className="personnal-content">
          <div className="content">
            <p className="bold">
              Hello,{" "}
              <b className="name">{sessionStorage.getItem("firstname")}</b>
              👋
            </p>
            <p>Have a nice day and don't forget to be strong !</p>
          </div>
          <GymAddictSVG />
        </div>
      )}
      <h1>Home</h1>
      <div className="content">
        <div className="content-wrapper">
          <div className="content-box">
            <p>Coming Soon ...</p>
          </div>
          <div className="content-box">
            <p>Coming Soon ...</p>
          </div>
          <div className="content-box">
            <p>Coming Soon ...</p>
          </div>
          <div className="content-box">
            <p>Coming Soon ...</p>
          </div>
          <div className="content-box">
            <p>Coming Soon ...</p>
          </div>
          <div className="content-box">
            <p>Coming Soon ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
