import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Filter } from '../../Models/Filter';
import { Country } from 'src/app/Models/Country';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filters!: Filter[];
  dropdownCountries!: Country[];
  faFilterIcon = faFilter;

  constructor(private filterService: FilterService, private route: ActivatedRoute, private uiSerivce: UiServiceService) { }

  savedFilter: any = {};

  // ngOnInit(): void {
  //   this.filters = this.filterService.getFilters();
  //   this.filters.forEach((filter) => {
  //     // bind the filter input values 
  //     this.savedFilter[filter.title] = null;
  //     // get the counries for the dropdown list
  //     if(filter.type === "dropdown") {
  //       if(filter.api) {
  //         this.filterService.getCountries(filter.api).subscribe((countriesList) => {
  //           this.dropdownCountries = countriesList;
  //         });
  //       }
  //     }
  //   });
  //   // Get the existing filter values
  //   this.route.queryParams.subscribe((params) => {
  //     for(var paramKey of Object.keys(params))
  //     {
  //       for(var filterName of Object.keys(this.savedFilter)) {
  //         if(paramKey === filterName) {
  //           this.savedFilter[filterName] = params[paramKey];
  //         }
  //       }
  //     }
  //   });
  // }

  
  // For testing purposes ** No API call
  ngOnInit(): void {
    this.filters = this.filterService.getFilters();
    this.filters.forEach((filter) => {
      // bind the filter input values 
      this.savedFilter[filter.title] = null;
      // get the counries for the dropdown list
      if(filter.type === "dropdown") {
        if(filter.api) {
          this.dropdownCountries = this.filterService.getCountries(filter.api);
        }
      }
    });
    // Get the existing filter values
    this.route.queryParams.subscribe((params) => {
      for(var paramKey of Object.keys(params))
      {
        for(var filterName of Object.keys(this.savedFilter)) {
          if(paramKey === filterName) {
            this.savedFilter[filterName] = params[paramKey];
          }
        }
      }
    });
  }
}
