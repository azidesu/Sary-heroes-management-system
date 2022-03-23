import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private showFilter: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleShowFilter(): void {
    this.showFilter = !this.showFilter;
    this.subject.next(this.showFilter);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
