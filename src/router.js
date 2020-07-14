import React from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './pages/admin'
import Home from './pages/home'
import ChartFactory from './pages/chartfactory'
import DataBoard from './pages/databoard'

import NoMatch from './pages/nomatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>                     
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/chartfactory" component={ChartFactory} />
                                    <Route path="/databoard" component={DataBoard} />

                                    <Redirect to="/home" />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}