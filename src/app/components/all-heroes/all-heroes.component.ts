import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent implements OnInit {
  showFilter: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiServiceService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showFilter = value;
    });
  }

  ngOnInit(): void {
  }
}
