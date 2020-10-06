import React from 'react';
//import logo from './assets/images/logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'

import routes from './routes'
import 'semantic-ui-css/semantic.min.css'
import { GlobalProvider } from './context/Provider';
import isAuthenicated from './utils/isAuthenticated';

function App() {

  const RenderRoute = (route) => {
   
    const history = useHistory();

    document.title = route.title || "User Management"
   
    if(route.needsAuth && !isAuthenicated ()) {
      console.log('Render Route', route.needsAuth);
      history.push('/auth/login')
    }

    console.log("route",{...route})
    
    return (
    <Route path={route.path}  exact render = { (props) => (<route.component {...props}  />) } ></Route> 
    );
  };  

  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            //<Route key={index} path={route.path} exact render={(props) => <route.component {...props} />}> </Route>
            <RenderRoute {...route} key={index}/>   
              //console.log("rout",{route})      
               //<Route key={index} path={route.path}  exact component = {route.component} /> 
            ))}
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;