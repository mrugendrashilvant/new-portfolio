import {Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('heroImage')heroImageRef!: ElementRef<HTMLImageElement>;
  @ViewChild("leftEye") leftEye!: ElementRef<HTMLDivElement>;
  @ViewChild("rightEye") rightEye!: ElementRef<HTMLDivElement>;
  @ViewChild("wrapper") wrapper!: ElementRef<HTMLElement>;

  imageLoaded() {
    console.log(this.heroImageRef.nativeElement.width)
  }

  moveEyes(ev:MouseEvent){
    ev.stopPropagation();
    let width = this.wrapper.nativeElement.offsetWidth;
    let height = this.wrapper.nativeElement.offsetHeight;
    this.leftEye.nativeElement.style.left = (ev.offsetX/width)*80 + "%";
    this.leftEye.nativeElement.style.top = (ev.offsetY/height)*80 + "%";
    this.rightEye.nativeElement.style.left = (ev.offsetX/width)*80 + "%";
    this.rightEye.nativeElement.style.top = (ev.offsetY/height)*80 + "%";
  }

}
