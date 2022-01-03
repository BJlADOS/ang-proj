import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/components/company-list.component';
import { CompanyDetailComponent } from './company-detail/components/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { LayoutComponent } from './layout/layout.component';
import { CompanyItemComponent } from './company-list/company-item/components/company-item.component';
import { CompanySortComponent } from './company-list/company-sort/components/company-sort.component';
import { CompanyFilterComponent } from './company-list/company-filter/components/company-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    LayoutComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'list', component: CompanyListComponent },
      { path: 'detail/:id', component: CompanyDetailComponent},
      { path: 'map', component: CompanyYandexMapComponent}
    ]),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
