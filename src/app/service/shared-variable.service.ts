import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedVariableService {
  private searchTextSubject = new BehaviorSubject<string>('');
  searchText$: Observable<string> = this.searchTextSubject.asObservable();

  setSearchText(searchText: string) {
    this.searchTextSubject.next(searchText);
  }
}
