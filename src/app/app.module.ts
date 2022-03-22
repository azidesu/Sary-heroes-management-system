import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  {path: 'heroes', component: AllHeroesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllHeroesComponent,
    HeroesTableComponent,
    TableHeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
