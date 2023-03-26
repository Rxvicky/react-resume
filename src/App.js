
import './App.css';
import Details from './component/Details';
import Profile from './component/Profile';
import Skills from './component/Skills';

function App() {
  return (
    <div >
      <div className='portion1'>
      <div> <Profile/> </div>
      <div> <Details/> </div>
      <div><Skills/></div>
      </div>
      
    </div>
  );
}

export default App;
