import { useState } from 'react';
import GameTest from '../../game/game';
import './index.css';

// 设备检测函数
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const GameList = ({ GameFrameUrlList }) => {
  const [gameFrameUrl, setGameFrameUrl] = useState('');

  const getTechClass = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('cocos')) return 'tech-cocos';
    if (lowerName.includes('egret')) return 'tech-egret';
    if (lowerName.includes('原生js')) return 'tech-js';
    return 'tech-other';
  };

  const renderGameList = () => {
    return (
      <div className="game-list-container">
        {gameFrameUrl ? (
          <GameTest url={gameFrameUrl} closeGame={() => setGameFrameUrl('')} />
        ) : (
          <div className="game-list-wrapper">
            <h1 className="game-list-title">欢迎来到233的小游戏集</h1>
            {!isMobileDevice && <div className="game-subtitle">请用手机打开预览</div>}
            <div className="games-grid">
              {GameFrameUrlList.map((game) => (
                <div key={game.url} className="game-card" onClick={() => setGameFrameUrl(game.url)}>
                  <div className="cover-container">
                    <img
                      src={game.img}
                      alt={game.name}
                      className="cover-image"
                      style={{ aspectRatio: '3/2' }} // 强制设置图片比例
                    />
                    <div className="cover-overlay">
                      <div className="game-name">{game.name}</div>
                      <span className={`tech-tag ${getTechClass(game.name)}`}>
                        {(() => {
                          const tech = getTechClass(game.name);
                          switch (tech) {
                            case 'tech-cocos':
                              return 'Cocos Creator';
                            case 'tech-egret':
                              return 'Egret';
                            case 'tech-js':
                              return '原生 JS';
                            default:
                              return '其他';
                          }
                        })()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {gameFrameUrl ? (
        <GameTest url={gameFrameUrl} closeGame={() => setGameFrameUrl('')} />
      ) : isMobileDevice ? (
        // 移动端原始布局
        <div className="game-list-container">{renderGameList()}</div>
      ) : (
        // 桌面端模拟窗口
        <div className="device-simulator">
          <div className="device-content">
            <div className="game-list-container">{renderGameList()}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameList;
