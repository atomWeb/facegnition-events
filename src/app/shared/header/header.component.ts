import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  title!: string;
  titleSubs$!: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouterPathArgs().subscribe(({ title }) => {
      this.title = title;
      document.title = `facegnition - ${this.title}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRouterPathArgs(): Observable<Data> {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
