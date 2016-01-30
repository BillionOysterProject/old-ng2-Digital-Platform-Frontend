import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
// import {About} from './components/about/about';
import {SignUp} from './components/auth/signup/signup';
import {Login} from './components/auth/login/login';
import {Profile} from './components/profile/profile';
// import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: 'app/app.html'
})
@RouteConfig([
  new Route({ path: '/', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/signup', component: SignUp, name: 'SignUp'}),
  new Route({ path: '/login', component: Login, name: 'Login'}),
  new Route({ path: '/profile', component: Profile, name: 'Profile'})


  // new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])
export class App {

  constructor(private router: Router) { }

}
