import { useEffect } from "react";
import "./game.css";

function GameTest({ url, closeGame }) {
  useEffect(() => {
    setTimeout(() => {
      const gameFrame = document.getElementById(
        "game-frame"
      ) as HTMLIFrameElement; // 获取嵌入的游戏的iframe元素
      if (gameFrame && gameFrame.contentWindow) {
        gameFrame.contentWindow.postMessage?.(
          { type: "message", data: "Hello from React" },
          "*"
        );
      }
    }, 3000);
  }, []);
  return (
    <div className="game-wrp">
      <div className="return-btn" onClick={closeGame}>
        返回
      </div>
      <iframe
        id="game-frame"
        src={url}
        title="Game"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default GameTest;
