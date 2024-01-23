import { useNavigate } from "react-router-dom";
import image from "../assets/1.png";


const HomePage = () => {

    const navigate = useNavigate(); 


  const handleYes = () => {
    navigate("/yes");
    // alert("Congratulations! We are a bond.");
  };
  const handleNo = () => {
    alert("Please say Yes!");
  };

  return (
  <div className="work-holder">
  <div className="img-holder">
    <img src={image} alt="" className="img" />
  </div>

  <div className="container">
    <div className="card">
      <p className="write">
        Hello <span className="name">Afia Bruno,</span>
      </p>
      <p className="write2"> Can i be your boyfriend? </p>
      <div className="button-hold">
        <button className="btn" onClick={handleYes}>
          YES{" "}
        </button>
        <button className="btn2" onClick={handleNo}>
          NO{" "}
        </button>
      </div>
      <div className="gif-holder">
        <img
          className="gif"
          src="https://media1.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt=""
        />
      </div>
      <div>
        <p className="write2">Your answer would mean alot to me Ohemaa</p>
      </div>
      <p className="write2">
        {" "}
        With all my love, <span className="names">Kobby</span>
      </p>
    </div>
  </div>

  {/* Trying part */}
  {/* <button className="btn2">No </button>
    <p className="brookes">Brookes</p>
    <img
      src="https://media1.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif"
      alt=""
    />
    <img
      src="https://media4.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
      alt=""
    /> */}
</div>);
};

export default HomePage;
