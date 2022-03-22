import { Component, OnInit } from '@angular/core';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {
  searchIcon = faSearch;
  filterIcon = faFilter;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
  }

  onFilterClick(): void {
    this.uiService.toggleAddTask();
  }

}
