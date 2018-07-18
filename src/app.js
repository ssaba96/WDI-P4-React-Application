import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import TalentsIndex from './components/talents/Index';
import TalentsShow from './components/talents/Show';
import TalentsEdit from './components/talents/Edit';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Navbar from './components/common/Navbar';
import FlashMessages from './components/common/FlashMessages';


import 'bulma';
import 'react-select/dist/react-select.css';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages/>
          <h1>Wicked Talent</h1>
          <Route exact path='/' component={Home} />
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/talents/:id/edit" component={TalentsEdit} />
                <Route path="/talents/:id" component={TalentsShow} />
                <Route path="/talents" component={TalentsIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                {/* <Route path="/" component={Home} /> */}
              </Switch>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
