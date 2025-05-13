import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, debounceTime, fromEvent } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PageSizeService implements OnDestroy {
  private pageWidthSubject = new BehaviorSubject<number>(window.innerWidth);
  pageWidth$ = this.pageWidthSubject.asObservable();
  private resizeSubscription: Subscription;

  constructor(private global: GlobalService) {
    this.resizeSubscription = fromEvent(window, 'resize')
    .pipe(debounceTime(300))
    .subscribe(() => {
      this.pageWidthSubject.next(window.innerWidth);
    });

    this.pageWidth$.subscribe((width: number) => {
      this.global.pageWidth = width;
      console.log(this.global.pageWidth);
    })
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
}
