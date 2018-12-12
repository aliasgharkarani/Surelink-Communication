import React, { Component } from 'react';
import './App.css'
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import history from './History';
import NotFound from './NotFound';
import Home from './App';
import About from './About';

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false,
        }
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/about" component={About} />
                        {/* <PrivateRoute authed={this.state.authed} path="/Main" component={Main} /> */}
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div >
        )

    }
}


export default Routers;