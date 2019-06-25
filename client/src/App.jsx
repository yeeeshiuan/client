import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MyNavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "MyGoogleApp",
        };
    }

    render() {
        return (
            <div>
                <MyNavBar
                    title={this.state.title}
                />
                <Switch>
                    <Route exact path="/" render={() => (
                        <Main />
                    )} />
                    <Route exact path="/about" render={() => (
                        <About />
                    )} />
                </Switch>
            </div>
        )
    }
};

export default App;
