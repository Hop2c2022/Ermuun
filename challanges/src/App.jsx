import "./App.css";
import { StarIcon } from "./component/Star";
import "./component/component.css";

function App() {
  return (
    <div className="App">
      <div className="first-box">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((el) => (
            <div style={{ paddingLeft: "5px" }}>
              <StarIcon width={"17px"} height={"17px"} />
            </div>
          ))}
        </div>
        <div className="textDad">
          <div className="text">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
        </div>
        <div className="userDad">
          <div className="user">
            <div className="profilePic">
              <img
                className="profile"
                src="https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg"
                alt=""
              />
            </div>
            <div className="userName">Albert Einstein</div>
          </div>
        </div>
      </div>
      <div className="second-box">
        <div className="heroBanner">
          <img
            className="hero"
            src="https://img.freepik.com/premium-vector/meeting-office-interior-business-conference-room-with-people-managers-working-team-cartoon-interior_80590-7766.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="headerDad">
          <div className="header">
            Data-Driven Design is Killing Our Instincts
          </div>
        </div>
        <div className="text2Dad">
          <div className="text2">
            <p className="text2p">
              Our latest updates and blogs about managing your team
            </p>
            <p className="text2p">
              Our latest updates and blogs about managing your team
            </p>
          </div>
        </div>
        <div className="userDad2">
          <div className="user2">
            <div className="profilePic2">
              <img
                className="profile2"
                src="https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg"
                alt=""
              />
            </div>
            <div className="userName2">Albert Einstein |19th October, 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
