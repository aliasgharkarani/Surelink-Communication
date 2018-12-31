import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './Components/Custom_Components/History';
import NotFound from './Components/Custom_Components/NotFound';
import Home from './Components/Home_Component/Home';
import About from './Components/About_Component/About';
import Products from './Components/Products_Component/Product'
import ContactUs from './Components/Contact_Component/ContactUs'

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
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/contactus" component={ContactUs} />
                        {/* <PrivateRoute authed={this.state.authed} path="/Main" component={Main} /> */}
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div >
        )

    }
}


export default Routers;