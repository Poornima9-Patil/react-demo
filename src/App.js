
import './App.css';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import Sidebar from './Components/Sidebar';
import {BrowserRouter} from "react-router-dom"
import Midnav from './Components/Midnav';

function App() {
  return (
    <div className="App">
      <Sidebar/>
     <div>
     <Navbar/>
     <Midnav/>
     <Page/>
     </div>
        
     
    
    </div>
  );
}

export default App;
