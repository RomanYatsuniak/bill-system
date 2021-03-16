import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserGuard } from './shared/guards/user.guard';
import { AdminModule } from './modules/admin/admin.module';
import { AdminGuard } from './shared/guards/admin.guard';
import { NotadminGuard } from './shared/guards/notadmin.guard';
import { NotUserGuard } from './shared/guards/notuser.guard';

const routes: Routes = [
  {path: 'bills', loadChildren: () => import('./modules/bills/bills.module').then(m => m.BillsModule), canActivate: [UserGuard]},
  // tslint:disable-next-line:max-line-length
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), canActivate: [NotadminGuard, NotUserGuard]},
  // tslint:disable-next-line:max-line-length
  {path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule), canActivate: [NotadminGuard, NotUserGuard]},
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [UserGuard]},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard]},
  {path: 'logout', redirectTo: ''},
  // tslint:disable-next-line:max-line-length
  {path: '', loadChildren: () => import('./modules/start/start.module').then(m => m.StartModule), canActivate: [NotadminGuard, NotUserGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
