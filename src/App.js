
import './App.css';
// import './css/Header.css'
import Header from './components/Header';
import SubNav from './components/SubNav';
import HeroSection from './components/HeroSection';
import Testimonial from './components/Testimonial';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SubNav />
      <HeroSection />
      <Testimonial />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
