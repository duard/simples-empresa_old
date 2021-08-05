import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '@envs'

import { AdminLayoutComponent } from '@simples-empresa/madero'
import { AuthLayoutComponent } from '@simples-empresa/madero'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './sessions/login/login.component'
import { RegisterComponent } from './sessions/register/register.component'
import { AuthGuard } from '@simples-empresa/angular/core'

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      // {
      //   path: 'design',
      //   loadChildren: () => import('./design/design.module').then((m) => m.DesignModule),
      // },
      // {
      //   path: 'material',
      //   loadChildren: () => import('./material/material.module').then((m) => m.MaterialModule),
      // },
      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then((m) => m.MediaModule),
      },
      // {
      //   path: 'forms',
      //   loadChildren: () => import('./forms/forms.module').then((m) => m.FormsModule),
      // },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      // {
      //   path: 'sessions',
      //   loadChildren: () => import('./sessions/sessions.module').then((m) => m.SessionsModule),
      // },
      // {
      //   path: 'helpers',
      //   loadChildren: () => import('./helpers/helpers.module').then((m) => m.HelpersModule),
      // },
      {
        path: 'permissions',
        loadChildren: () => import('./permissions/permissions.module').then((m) => m.PermissionsModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}