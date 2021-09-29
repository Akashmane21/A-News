import './App.css';
import {Route,Switch} from 'react-router-dom'
import About from './Pages/Aboutme'
import Detail from './Pages/Detail'
import Top from './Pages/Top'
import Search from './Pages/Search'
function App() {
  return (
    <>

   
<Switch>
         <Route exact path='/' component={Top} />
         <Route exact path='/Detail' component={Detail} />
         <Route exact path='/Top' component={Top} />
         <Route exact path='/About' component={About} />
         <Route exact path='/Search' component={Search} />
         <Route component={Error} />
 </Switch>
    </>
  );
}

export default App;
