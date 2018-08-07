import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import AboutMe from './aboutme'
import MyWork from './myWork'

const Main = () => (
	<Switch>	
	  <Route exact path="/" component={Home} />
	  <Route path="/aboutme" component={AboutMe} />
	  <Route path="/myWork" component={MyWork} />
	</Switch>
)

export default Main;