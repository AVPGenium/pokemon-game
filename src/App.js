import {useLocation, useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";

import classnames from "classnames";
import stl from './App.module.css'
import {FireBaseContext} from "./context/fireBaseContext";
import Firebase from "./service/firebase";


function App() {
    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/game/board';

    // const match = useRouteMatch('/');
    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path='/404' component={NotFoundPage}/>

                <Route>
                    <>
                        <MenuHeader bgActive={!isPadding}/>

                        <div className={classnames(stl.page_wrap, {[stl.isHomePage]: isPadding})}>
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
        </FireBaseContext.Provider>

    )
}

export default App;
