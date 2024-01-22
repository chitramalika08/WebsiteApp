
import './App.css';
import Explore from './pages/Explore';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Home from './pages/home';
import Review from './pages/review';
import Works from './pages/works';

function App() {
  return (
    <div className="">
     <Home/>
     <Works/>
     <Explore/>
     <Review/>
     <Blog/>
     <Contact/>

    </div>
  );
}

export default App;
