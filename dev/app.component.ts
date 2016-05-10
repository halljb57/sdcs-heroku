import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';

/* Pages */
import {HomeComponent}          from './home/home.component';
import {LoginComponent}         from './login/login.component';
import {ServicesComponent}      from './services/services.component';
import {AboutComponent}         from './about/about.component';
import {ContactUsComponent}     from './contact_us/contactUs.component';
import {CareerCenterComponent}  from './career_center/careerCenter.component';

@Component({
    selector: 'my-app',
    templateUrl: '../app/shared/navbar.html',
    directives: [ROUTER_DIRECTIVES, RouterLink]
})

@RouteConfig([
    {path: '/home',                 name: 'Home',           component: HomeComponent},
    {path: '/login',                name: 'Login',          component: LoginComponent},
    {path: '/services',             name: 'Services',       component: ServicesComponent},
    {path: '/about',                name: 'About',          component: AboutComponent},
    {path: '/contactUs',            name: 'ContactUs',      component: ContactUsComponent},
    {path: '/careerCenter',         name: 'CareerCenter',   component: CareerCenterComponent},
])

export class AppComponent { }