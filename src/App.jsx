import { useState } from "react";
import "./App.css";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80);
    const randomLeft = Math.floor(Math.random() * 80);

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="container">
      {!yesClicked ? (
        <>
          <h1 className="question">Will you be my Valentine? ❤️</h1>

          <button
            className="yes-btn"
            onClick={() => setYesClicked(true)}
          >
            Yes 💖
          </button>

          <button
            className="no-btn"
            style={{ top: noPosition.top, left: noPosition.left }}
            onMouseEnter={moveNoButton}
          >
            No 😜
          </button>
        </>
      ) : (
        <div className="love-container">
          <div className="heart"></div>
          <h1 className="love-text">I love you Shivangi ❤️</h1>
        </div>
      )}
    </div>
  );
}

export default App;
