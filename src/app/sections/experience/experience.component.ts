import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit{
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    console.log("scrolling")
  }
  // onScroll(event: Event) {
  //   console.log("scrolling")
  //   if(this.isInViewport()) {
  //     this.moveMarker();
  //   }
  // }
  @ViewChild('marker')marker!:ElementRef<HTMLDivElement>;
  @ViewChild('path') path!:ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
  }

  moveMarker() {
    this.marker.nativeElement.classList.add('move');
  }

  isInViewport() {
    const rect = this.path.nativeElement.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
