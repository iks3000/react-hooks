import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderNav from './header-nav';
import AppStarWarsPlanets from './starwars-planets';
import HookRules from './hook-rules';
import AppUseContext from './use-context';
import UseEffectExrcise from './use-effect-exercises';
import AppUseEffect from './use-effect';
import AppUseState from './use-state';

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <div className="jumbotron m-0 p-5">
        <Switch>
          <Route exact
            path="/react-hooks"
            render={() => (
              <div className="jumbotron">
                <h1 className="text-center text-success">How to use Hooks!</h1>
              </div>)
            }
          />

          <Route path="/react-hooks/hook-rules" component={HookRules} />
          <Route path="/react-hooks/use-state" component={AppUseState} />
          <Route path="/react-hooks/use-effect" component={AppUseEffect} />
          <Route path="/react-hooks/use-context" component={AppUseContext} />
          <Route path="/react-hooks/use-effect-exercises" component={UseEffectExrcise} />
          <Route path="/react-hooks/star-wars-planets" component={AppStarWarsPlanets} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
