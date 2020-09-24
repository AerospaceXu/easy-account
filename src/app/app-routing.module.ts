import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { BillComponent } from './pages/bill/bill.component';
import { StatisticComponent } from './pages/statistic/statistic.component';

const routes: Routes = [
  { path: 'bill', component: BillComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: '', redirectTo: '/bill', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
