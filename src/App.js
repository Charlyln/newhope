import './App.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App() {
  const handle = useFullScreenHandle();

  const clickButton = () => {
    const iframe = document.getElementById('iframe');
    iframe.contentWindow.focus();
    handle.enter();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={clickButton}>Fullscreen</button>
        <FullScreen handle={handle}>
          <iframe
            id='iframe'
            title='newhope'
            src='https://play.gx.games/game-wrapper/ef073b8d-785c-44f1-b886-406c7fff96f1/index.html?game=d9710581-ad8d-4298-8e29-0b0166ccad20&track=d181ad25-4334-4e4b-bbc2-87418110461e&release=fde3479e-d8af-4786-97f5-3bd32e17f515&userId=9547171b-f050-4756-a417-777c8f86642d&username=charlypse&avatarUrl&gamePlayId=95fbc9ff-15c6-407a-8bf7-85dc7f0ae65d&coverImage=https://play.gxc.gg/game/d9710581-ad8d-4298-8e29-0b0166ccad20/cover/2a136eee-34f3-4f93-8046-2b4309ea1465?79a981994dcf746d26837c99f677026c'
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </FullScreen>
      </header>
    </div>
  );
}

export default App;
