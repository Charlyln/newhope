import './App.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App() {
  const handle = useFullScreenHandle();

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handle.enter}>Fullscreen</button>
        <FullScreen handle={handle}>
          <iframe
            title='newhope'
            src='https://play.gx.games/game-wrapper/ef073b8d-785c-44f1-b886-406c7fff96f1/index.html?game=d9710581-ad8d-4298-8e29-0b0166ccad20&track=d181ad25-4334-4e4b-bbc2-87418110461e&release=aa9b1295-9a4a-4795-8871-09e975572a53&userId=9547171b-f050-4756-a417-777c8f86642d&username=charlypse&avatarUrl&gamePlayId=59659f9c-e07d-40bd-9a9d-25591876f995&coverImage=https://play.gxc.gg/game/d9710581-ad8d-4298-8e29-0b0166ccad20/cover/2a136eee-34f3-4f93-8046-2b4309ea1465?79a981994dcf746d26837c99f677026c'
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
