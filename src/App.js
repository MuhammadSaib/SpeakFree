import { BrowserRouter } from 'react-router-dom';
import Nav from './Component/nav.js';
import Home from './Component/home.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Home />
     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
