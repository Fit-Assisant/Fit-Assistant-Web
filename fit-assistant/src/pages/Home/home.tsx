import HomeImage from "./HomeImage/HomeImage";
import "./home.css";

function Home() {
  return (
    <div className={"home"}>
      <h1>Home</h1>
      <HomeImage/>
      <div className="text-wrapper">
      <p> Welcome on Fit Assistant AKA your best workout tracker friend.</p>
      <p>On this website, you'll have access to all our workout exercises and programs. We are here to help you not to be lost in your gym the first time.</p>
      <p>Not only for the beginners, you will have the possibilities to save all your PR (Personnal Records) to see your progression curve.</p>
    </div>
    </div>
    
  );
}

export default Home;
