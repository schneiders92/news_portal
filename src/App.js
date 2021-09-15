import './App.css';
import News from './News'
import Header from "./Header"
import NewsFilter from "./NewsFilter";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"


function App() {


    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/home">
                    <NewsFilter category="top-headlines"/>
                </Route>
                <Route path="/politics">
                    <NewsFilter category="politics"/>
                </Route>
                <Route path="/economy">
                    <NewsFilter category="economy"/>
                </Route>
                <Route path="/sport">
                    <NewsFilter category="sport"/>
                </Route>
                <Route path="/tech">
                    <NewsFilter category="tech"/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
