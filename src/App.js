import './App.css';
import News from './News'
import Header from "./Header"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

function App() {


    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/home">
                    <News category="top-headlines"/>
                </Route>
                <Route path="/politics">
                    <News category="politics"/>
                </Route>
                <Route path="/economy">
                    <News category="economy"/>
                </Route>
                <Route path="/sport">
                    <News category="sport"/>
                </Route>
                <Route path="/tech">
                    <News category="tech"/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
