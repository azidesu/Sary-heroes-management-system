import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Filter } from '../../Models/Filter';
import { Country } from 'src/app/Models/Country';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filters!: Filter[];
  dropdownCountries!: Country[];
  faFilterIcon = faFilter;

  constructor(private filterService: FilterService) { }

  // ngOnInit(): void {
  //   this.filters = this.filterService.getFilters();
  //   this.filters.forEach((filter) => {
  //     if(filter.type === "dropdown") {
  //       if(filter.api) {
  //         this.filterService.getCountries(filter.api).subscribe((countriesList) => {
  //           this.dropdownCountries = countriesList;
  //         });
  //       }
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.filters = this.filterService.getFilters();
    this.filters.forEach((filter) => {
      if(filter.type === "dropdown") {
        if(filter.api) {
          this.dropdownCountries = this.filterService.getCountries(filter.api);
        }
      }
    });
  }

}
