import { useState } from "react";
import "./App.css";
import GameTest from "./game/game";

const urlPre = location.href.includes("friends233.github.io")
  ? "/cocos-game"
  : "";
const GameFrameUrlList = [
  {
    url: urlPre + "/src/cocos1010/index.html",
    name: "1010",
    img: urlPre + "/src/cocos1010/1010.png",
  },
  {
    url: urlPre + "/src/cocosGoldenMiner/index.html",
    name: "黄金矿工",
    img: urlPre + "/src/cocosGoldenMiner/goldenMiner.png",
  },
];

function App() {
  const [gameFrameUrl, setGameFrameUrl] = useState("");
  return (
    <div>
      <h4 className="game-title">
        欢迎来到Friends233的小游戏，请用手机打开预览
      </h4>
      {gameFrameUrl ? (
        <GameTest url={gameFrameUrl} closeGame={() => setGameFrameUrl("")} />
      ) : (
        GameFrameUrlList.map(({ name, url, img }, i) => {
          return (
            <div
              className="game-list"
              key={i + "game-btn"}
              onClick={() => setGameFrameUrl(url)}
            >
              <img src={img} alt="" className="game-img"></img>
              <div className="game-btn">{name}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
