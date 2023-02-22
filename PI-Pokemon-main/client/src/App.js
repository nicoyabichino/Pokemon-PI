import {Home, Landing, Detail, Form} from "./views";
// import NavBar from "./components/NavBar/NavBar";
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  
  return (
     <BrowserRouter>
    <div className="App">
       
      
      <Route exact path="/">
      <Landing></Landing>
      </Route>
      
      
      <Route path="/home">
      <Home></Home>
      </Route>

      <Route path="/detail">
      <Detail></Detail>
      </Route>

      <Route path="/create">
      <Form></Form>
      </Route>

    </div>
    </BrowserRouter>
  )
};

export default App;
