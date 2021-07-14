import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import './css/Header.css'
import Header from './components/Header';
import SubNav from './components/SubNav';
import HeroSection from './components/HeroSection';
import Testimonial from './components/Testimonial';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import ShareStory from './ShareStory';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/story">
          <ShareStory />
        </Route>
      <Route path="/">
        <div>
          <Header />
          <SubNav />
          <HeroSection />
          <Testimonial />
          <MainSection />
          <Footer />
        </div>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
