import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Airport from './Views/Airport/Airport';
import AirportDetail from './Views/AirportDetail/AirportDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail/:id" component={AirportDetail} />
        <Route path="/" exact component={Airport} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;