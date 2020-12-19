import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageBillComponent } from './pages/page-bill/page-bill.component';
import { PageStatisticComponent } from './pages/page-statistic/page-statistic.component';

const routes: Routes = [
  { path: 'page-bill', component: PageBillComponent },
  { path: 'page-statistic', component: PageStatisticComponent },
  { path: '', redirectTo: '/page-bill', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
