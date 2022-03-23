import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Galery from './components/galery/Galery';
import Contact from './components/Contact';
import About from './pages/About';
import { Helmet } from 'react-helmet';
import teste from './pages/test';




function App() {
  return (
    <div> 
      <div> 
    <Helmet>
      <title>Academia Hope Team</title>
    </Helmet>
    </div>
    <>
    <BrowserRouter basename="/hopeteam"> 
        <NavBar />
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/galeria" component={Galery}/>
             <Route path="/contato" component={Contact} />
             <Route path="/sobre" component={teste}/>
          </Switch>
         
     </BrowserRouter>
     </>
     </div>
  );
}

export default App;
