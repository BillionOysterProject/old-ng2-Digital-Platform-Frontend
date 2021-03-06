import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
// import {About} from './components/about/about';

import {SignUp} from './components/auth/signup/signup';
import {Login} from './components/auth/login/login';
// import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'app/seed-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/', component: Home, name: 'Home', useAsDefault: true}),
  // new Route({ path: '/auth/...', component: Auth, name: 'Auth'}),
  new Route({ path: '/signup', component: SignUp, name: 'SignUp'}),
  new Route({ path: '/login', component: Login, name: 'Login'})
  

  // new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class SeedApp {

  constructor(private router:Router) {}

}
