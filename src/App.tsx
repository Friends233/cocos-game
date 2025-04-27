import { useState } from 'react';
import './App.css';
import GameTest from './game/game';
import GameList from './pages/GameList';

const baseUrl = location.href.includes('friends233.github.io/') ? '/cocos-game' : '';
const GameFrameUrlList = [
  {
    url: baseUrl + '/game/cocos1010/index.html',
    name: 'cocos1010',
    img: baseUrl + '/gameImg/1010.png',
  },
  {
    url: baseUrl + '/game/cocosGoldenMiner/index.html',
    name: 'cocos黄金矿工',
    img: baseUrl + '/gameImg/goldenMiner.png',
  },
  {
    url: '/CocosAircraftWar/',
    name: 'cocos飞机大战demo',
    img: baseUrl + '/gameImg/aircraftWar.png',
  },
  {
    url: '/emojiAndEmoji/',
    name: 'egret羊了个羊demo',
    img: baseUrl + '/gameImg/羊了个羊.png',
  },
  {
    url: '/javascript-game-2048/',
    name: '原生js实现2048',
    img: baseUrl + '/gameImg/2048.png',
  },
];

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
