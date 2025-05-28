import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Landing from './pages/Landing';
import Searcher from './pages/Searcher';
import { useParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/Searcher" element={<Searcher />}></Route>      
      </Routes>
    </div>




    </Router>
  );
}

export default App;
