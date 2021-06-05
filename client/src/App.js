import { Box } from "@material-ui/core";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './main.css'
import FocusFilm from "./components/FocusFilm/FocusFilm";

function App() {
  return (
    <Router>
      <Box className="App">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Body />
          </Route>
          <Route path='/film/:id'>
            <FocusFilm />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
