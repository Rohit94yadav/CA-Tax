import './App.css';
import Footer from './components/Footer';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home1/>
      <Home2/>
      <Home3/>
      <Footer/>
    </div>
  );
}

export default App;
