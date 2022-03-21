import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
