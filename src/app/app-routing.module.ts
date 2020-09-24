import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AppBillComponent } from './pages/app-bill/app-bill.component';
import { AppStatisticComponent } from './pages/app-statistic/app-statistic.component';

const routes: Routes = [
  { path: 'bill', component: AppBillComponent },
  { path: 'statistic', component: AppStatisticComponent },
  { path: '', redirectTo: '/bill', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
