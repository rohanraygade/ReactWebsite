import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Navigation from './components/navigationComponent/navigation'
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Team from './components/pages/team';
import Information from './components/pages/info';



import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
<Router>
      <div className="App">

	<Header />
	
 	  <Route exact path='/' component={Homepage}/>
          <Route exact path='/team' component={Team}/>
          <Route exact path='/info' component={Information}/>

	<Navigation />
	
	<Footer />
        
      </div>
</Router>
    );
  }
}

export default App;
