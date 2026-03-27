import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Component/Header/Header.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Ourworks from './Component/Ourworks/Work.jsx';
import Recentwork from './Component/Resentwork/Recent.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Projectlink from './Component/Projectlink/Projectlink.jsx';
import Demo from './Component/Demo/Demo.jsx';
import Footer from './Component/Footer/Footer.jsx';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,      // Animation duration in ms
      easing: 'ease-out-cubic',
      once: true,         // Animate only once per element
      offset: 80,         // Trigger 80px before element enters viewport
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Demo />
      <Ourworks />
      <Projectlink />
      <Recentwork />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
