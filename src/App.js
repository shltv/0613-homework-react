import './style.css'
import Header from './header/header';

function App() {
  return (
    // main
    <div id='main'>
      <Header />
      <div id="page"> {/*images*/}
        <div className='image' id='arctic'> {/*arctic*/}
          <svg viewBox="0 0 58 25">
            <text x="13%" y="75%">Let's</text>
          </svg>
        </div>
        <div className='image' id='flashlight'> {/*flashlight*/}
          <svg viewBox="0 0 58 25">
            <text x="20%" y="75%">give</text>
          </svg>
        </div>
        <div className='image' id='hiker'> {/*hiker*/}
          <svg viewBox="0 0 58 25">
            <text x="20%" y="75%">all</text>
          </svg>
        </div>
        <div className='image' id='fox'> {/*fox*/}
          <svg viewBox="0 0 58 25">
            <text x="20%" y="75%">you</text>
          </svg>
        </div>
        <div className='image' id='clouds'> {/*clouds*/}
          <svg viewBox="0 0 58 25">
            <text x="20%" y="75%">can</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
