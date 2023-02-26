import {Home, Landing, Detail, Form} from "./views";
import NavBar from "./components/NavBar/NavBar";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import './App.css';

function App() {
  
  return (
     <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/" component={NavBar} />
    </Switch>
      
      <Route path="/home">
      <Home/>
      </Route>

      <Route path="/detail/:id">
      <Detail/>
      </Route>

      <Route path="/create">
      <Form/>
      </Route>  

    </div>
    </BrowserRouter>
  )
};

export default App;
