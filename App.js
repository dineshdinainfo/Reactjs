import React from 'react'
import './App.css'
import { BrowserRouter as Router , Switch , Route , Link } from 
"react-router-dom";
  import Navbar from './compents/Navabar'
 
  
  import Home from './compents/pages/Home'
  import About from './compents/pages/About'
  import Carrer from './compents/pages/Carrer'
  import Services from './compents/pages/Services'
  import Signup from './compents/pages/Signup'
  import Notfound from './compents/pages/Notfound'


 function App() {
return (
 
  <Router>
    <Navbar />
    < Switch>

    <Route path = '/home' exact component = {Home}/>
    <Route path = '/about' component = {About}/>
    <Route path = '/Services' component = {Services}/>
    <Route path = '/carrer' component = {Carrer}/>
    
    <Route path = '/signup' component = {Signup}/>
    <Route  component = {Notfound}/>

</Switch>

  </Router>

 )
}
export default App