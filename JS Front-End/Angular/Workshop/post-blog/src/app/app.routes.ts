import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NewThemeComponent } from './themes/new-theme/new-theme.component';
import { MainComponent } from './main/main.component';
import { ThemeContentComponent } from './themes/theme-content/theme-content.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},

    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'profile', component: ProfileComponent},

    {path: 'themes', children: [
        {path: '', component: MainComponent},
        {path: ':themeId', component: ThemeContentComponent}
    ]},
    {path: 'add-theme', component: NewThemeComponent},

    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'},

];
