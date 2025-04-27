import { useState } from 'react';
import './App.css';
import GameTest from './game/game';
import GameList from './pages/GameList';

const baseUrl = location.href.includes('friends233.github.io/') ? '/cocos-game' : '';
const GameFrameUrlList = [
  {
    url: '/game/cocos1010/index.html',
    name: 'cocos1010',
    img: '/gameImg/1010.png',
  },
  {
    url: '/game/cocosGoldenMiner/index.html',
    name: 'cocos黄金矿工',
    img: '/gameImg/goldenMiner.png',
  },
  {
    url: 'https:/friends233.github.io/CocosAircraftWar/',
    name: 'cocos飞机大战demo',
    img: '/gameImg/aircraftWar.png',
  },
  {
    url: 'https:/friends233.github.io/emojiAndEmoji/',
    name: 'egret羊了个羊demo',
    img: '/gameImg/羊了个羊.png',
  },
  {
    url: 'https:/friends233.github.io/javascript-game-2048/',
    name: '原生js实现2048',
    img: '/gameImg/2048.png',
  },
].map((_) => ({ ..._, url: baseUrl + _.url, img: baseUrl + _.img }));

function App() {
  const [gameFrameUrl, setGameFrameUrl] = useState('');
  return <GameList GameFrameUrlList={GameFrameUrlList} />;
  return (
    <div className="view-body">
      {gameFrameUrl ? (
        <GameTest url={gameFrameUrl} closeGame={() => setGameFrameUrl('')} />
      ) : (
        <>
          <h4 className="game-title">Friends233的小游戏</h4>
          <div className="game-subtitle">请用手机打开预览</div>
          {GameFrameUrlList.map(({ name, url, img }, i) => {
            return (
              <div className="game-list" key={i + 'game-btn'} onClick={() => setGameFrameUrl(url)}>
                <img src={img} alt="" className="game-img"></img>
                <div className="game-btn">{name}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
