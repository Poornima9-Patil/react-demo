
import './App.css';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import Sidebar from './Components/Sidebar';
import Midnav from './Components/Midnav';
import Paths from './Components/Paths';
import PropsExample from './Components/PropsExample';

function App() {
  return (
    <div className="App">
  <Sidebar/>
  <div>
    <Navbar/>
    <Midnav/>
    <Page/>
  
    <PropsExample/>
  </div>
        
     
    
    </div>
  );
}

export default App;
