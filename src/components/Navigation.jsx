import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;