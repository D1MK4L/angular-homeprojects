import { Routes } from '@angular/router';
import { FunForNerdsComponent } from './components/fun-for-nerds/fun-for-nerds.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path: 'fun-for-nerds', component: FunForNerdsComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
];
