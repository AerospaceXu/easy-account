import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './pages/bill/bill.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TotalStatisticCardComponent } from './components/bill/total-statistic-card/total-statistic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    StatisticComponent,
    NotFoundComponent,
    LayoutComponent,
    SearchBarComponent,
    NavBarComponent,
    TotalStatisticCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
