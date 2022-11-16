import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Whatwedo from './components/Whatwedo';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Whatwedo/>
      <About/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
