import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'bills', loadChildren: () => import('./modules/bills/bills.module').then(m => m.BillsModule)},
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule)},
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
