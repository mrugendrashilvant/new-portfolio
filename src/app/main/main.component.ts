import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit{
  @ViewChild("leftEye") leftEye!: ElementRef<HTMLSpanElement>;
  @ViewChild("rightEye") rightEye!: ElementRef<HTMLSpanElement>;
  @ViewChild("profilePicBg") profilePicBg!: ElementRef<HTMLDivElement>;
  @ViewChild("skillsCirlce") skillsScircle!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
  }

  toggleRotation(stopRotate:boolean) {
    console.log(stopRotate);
    if(stopRotate) {
      this.skillsScircle.nativeElement.style.animation = "none";
    }
  }

  resetEyes(ev:MouseEvent) {
    ev.stopPropagation();
    this.leftEye.nativeElement.style.left = "50%";
    this.leftEye.nativeElement.style.top = "50%";
    this.rightEye.nativeElement.style.left = "50%";
    this.rightEye.nativeElement.style.top = "50%";
  }

  moveEyes(ev:MouseEvent){
    ev.stopPropagation();
    let width = this.profilePicBg.nativeElement.offsetWidth;
    let height = this.profilePicBg.nativeElement.offsetHeight;
    this.leftEye.nativeElement.style.animation = "none";
    this.rightEye.nativeElement.style.animation = "none";
    this.leftEye.nativeElement.style.left = (ev.offsetX/width)*80 + "%";
    this.leftEye.nativeElement.style.top = (ev.offsetY/height)*80 + "%";
    this.rightEye.nativeElement.style.left = (ev.offsetX/width)*80 + "%";
    this.rightEye.nativeElement.style.top = (ev.offsetY/height)*80 + "%";
  }
}
