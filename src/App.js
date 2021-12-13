import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Route/Home";
import About from "./Route/About";
import Contact from './Route/Contact';


import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AppDevelopment from './Route/AppDevelopment';
import WebDevelopment from './Route/WebDevelopment';
import UiDevelopment from './Route/UiDevelopment';
import Digital from './Route/Digital';


function App() {
  Aos.init();
  return (
    <div className="App">
      <main class="wow fadeIn" style={{ visibility: "visible" }}>
        <Header />
        <React.Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/AppDevelopment" component={AppDevelopment} />
              <Route exact path="/WebDevelopment" component={WebDevelopment} />
              <Route exact path="/UiDevelopment" component={UiDevelopment} />
              <Route exact path="/Digital" component={Digital} />
            </Switch>
          </BrowserRouter>

        </React.Fragment>

        <Footer />
      </main>
    </div>
  );
}

export default App;
