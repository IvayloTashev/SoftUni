import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NewThemeComponent } from './themes/new-theme/new-theme.component';
import { MainComponent } from './main/main.component';
import { ThemeContentComponent } from './themes/theme-content/theme-content.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },

    {
        path: 'themes', children: [
            { path: '', component: MainComponent },
            { path: ':themeId', component: ThemeContentComponent }
        ]
    },
    { path: 'add-theme',
        canActivate: [AuthGuard],
        loadComponent: () => import(`./themes/new-theme/new-theme.component`).then((c) => c.NewThemeComponent),
     },


    { path: 'error', component: ErrorMsgComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },

];
