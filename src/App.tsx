import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Route, Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RecipeHeader from './components/RecipeHeader';
import './App.css';

const useStyles = makeStyles((theme) => ({
})
);

interface Props{};

const history = createBrowserHistory();

function App() {

  return (
    <div className="App">
      <Router history={history}>
          <Switch>
            <Route exact path = "/" render = {(props: Props) => <RecipeHeader {...props}/>}/>
            <Route path = "*" render = {(props: Props) => <div>Page Not Found</div>} />
          </Switch>
        </Router>
    </div>
  );
}


export default App;
