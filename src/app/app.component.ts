import { Component } from '@angular/core';
import { DataService } from './data.service';
import { map , tap, shareReplay} from 'rxjs/operators';
import { Observable} from 'rxjs';

export interface Item {
  title: string;
  id: string | number;
  children?: Item[];
  parent?: string|number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list$: Observable<Item[]>
  matcher = (term, item) => item.title.toLowerCase().includes(term.toLowerCase()) || `${item.id}` === `${term}` ;
  
  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.list$ = this.data.getFlatData().pipe(
      shareReplay(1),
    )

  }
}
