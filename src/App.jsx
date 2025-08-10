import { useState } from 'react'
import Header from './Component/Header/Header.jsx';
import Home from './Component/Home/Home.jsx';
 import About  from './Component/About/About.jsx';
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Ourworks from './Component/Ourworks/Work.jsx';
import Recentwork from './Component/Resentwork/Recent.jsx';
import Contact  from './Component/Contact/Contact.jsx';
import Projectlink  from './Component/Projectlink/Projectlink.jsx';



import Demo from './Component/Demo/Demo.jsx';
import Footer from './Component/Footer/Footer.jsx';
import { Tab } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = ()=>{


  return (
    <>
     <Header/>
     <Home />
     <About />
     <Demo />
     <Ourworks />
     <Projectlink />
     <Recentwork />
      <Contact />
      <Footer />
  
    </>
    
  )
}

export default App;
