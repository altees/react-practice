import { Switch,Route } from 'react-router';
import DataTableComp from './components/GetDataTableComp';
import HeaderComp from './components/HeaderComp';
import RegistrationComp from './components/RegistrataionComp';



function App() {
  return (
    <div className="App">
      <HeaderComp/>
         <Switch>
  <Route  exact path="/reg" component={RegistrationComp} />
  </Switch>   
  <Switch>   
  <Route exact path="/get" component={DataTableComp}/>
  </Switch>
    </div>
  );
}

export default App;
