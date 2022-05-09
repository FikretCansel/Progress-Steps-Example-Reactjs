import './App.css';
import Foorter from './components/Footer/Foorter';
import Header from './components/Navbar/Header';
import Home from './pages/Home';



function App() {
  return (
    <div className="App container">
      <Header/>
      <Home/>
      <Foorter/>
      
    </div>
  );
}

export default App;
