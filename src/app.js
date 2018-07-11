import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <h1>Wicked Talent</h1>
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
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
