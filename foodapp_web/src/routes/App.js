import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home'
import Layout from '../components/Layout'
import NotFound from '../containers/NotFound'

function App() {
  return(
    <div className="page-container">
    <div className="content-wrap">
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/h/h" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
    </div>
    </div>
);
}

export default App;
