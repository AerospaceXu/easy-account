import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageBillComponent } from './pages/page-bill/page-bill.component';
import { PageStatisticComponent } from './pages/page-statistic/page-statistic.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainPageLayoutComponent } from './layout/main-page-layout/main-page-layout.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TotalStatisticCardComponent } from './components/bill/total-statistic-card/total-statistic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageBillComponent,
    PageStatisticComponent,
    PageNotFoundComponent,
    MainPageLayoutComponent,
    SearchBarComponent,
    NavBarComponent,
    TotalStatisticCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
