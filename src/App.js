import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HomeBackground from './components/HomeBackground';
import Nav from './Component/nav.js';
import Home from './Home.js'
import AboutUs from './AboutUs.js'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;



