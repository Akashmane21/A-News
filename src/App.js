import './App.css';
import reactRouterDom from 'react-router-dom';
import {Route,Switch} from 'react-router-dom'
import Bollywood from './Pages/Bollywood'
import Politics from './Pages/Politics'
import India from './Pages/India'
import World from './Pages/World'
import Top from './Pages/Top'
import Search from './Pages/Error'
function App() {
  return (
    <>

   
<Switch>
         <Route exact path='/' component={Top} />
         <Route exact path='/india' component={India} />
         <Route exact path='/World' component={World} /> 
         <Route exact path='/Top' component={Top} />
         <Route exact path='/Bollywood' component={Bollywood} /> 
         <Route exact path='/politics' component={Politics} />
         <Route exact path='/Search' component={Search} />
         <Route component={Error} />
 </Switch>
    </>
  );
}

export default App;
