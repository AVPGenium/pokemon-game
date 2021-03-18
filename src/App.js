import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import {useState} from 'react';

import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";

import classnames from "classnames";
import stl from './App.module.css'


function App() {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route path='/404' component={NotFoundPage}/>

            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>

                    <div className={classnames(stl.page_wrap, {[stl.isHomePage]: match.isExact})}>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/game' component={GamePage}/>
                            <Route path='/about' component={AboutPage}/>
                            <Route path='/contact' component={ContactPage}/>
                            <Route render={() => <Redirect to='/404'/>}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )
}

export default App;
