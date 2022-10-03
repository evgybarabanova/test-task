//import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Home';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
