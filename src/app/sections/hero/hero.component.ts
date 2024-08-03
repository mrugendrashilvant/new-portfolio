import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin"

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
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroImage') heroImageRef!: ElementRef<HTMLImageElement>;
  @ViewChild("leftEye") leftEye!: ElementRef<HTMLDivElement>;
  @ViewChild("rightEye") rightEye!: ElementRef<HTMLDivElement>;
  @ViewChild("wrapper") wrapper!: ElementRef<HTMLElement>;
  showDetails: boolean = false;

  imageLoaded() {
    console.log(this.heroImageRef.nativeElement.width)
  }

  moveEyes(ev: MouseEvent) {
    ev.stopPropagation();
    let width = this.wrapper.nativeElement.offsetWidth;
    let height = this.wrapper.nativeElement.offsetHeight;
    this.leftEye.nativeElement.style.left = (ev.offsetX / width) * 80 + "%";
    this.leftEye.nativeElement.style.top = (ev.offsetY / height) * 80 + "%";
    this.rightEye.nativeElement.style.left = (ev.offsetX / width) * 80 + "%";
    this.rightEye.nativeElement.style.top = (ev.offsetY / height) * 80 + "%";
  }

  ngAfterViewInit() {
    gsap.registerPlugin(TextPlugin);
    let tl = gsap.timeline();

    tl.to(".name", {
      duration: 3,
      text: {
        value: "I'm <em>Mrugendra Shilvant</em> 👨🏻‍💻",
        delimiter: ""
      },
      ease: "back",
    });
    tl.to(".actions", {
      duration: 2,
      onComplete: () => {
        this.showSkills(0)
      },
      text: {
        value: "I'm a <span class='what font-bold rounded px-2 py-1'>Software Engineer</span>",
        delimiter: ""
      }
    })
  }

  showSkills(index: number) {
    let skills = [
      {
      text: "Frontend Developer",
      background: "#8CB9BD",
      textColor: "white"
    },
      {
        text: "Angular Developer",
        background: "#ECB159",
        textColor: "white"
      },
      {
        text: "Problem Solver",
        background: "#8CB9BD",
        textColor: "white"
      },
      {
        text: "Software Engineer",
        background: "#ECB159",
        textColor: "white"
      },
    ]
    if (index >= skills.length) {
      index = index % skills.length;
    }
    gsap.to(".what", {
      duration: 3,
      onComplete: () => this.showSkills(++index),
      text: {
        value: `${skills[index].text}`,
        delimiter: ""
      },
      backgroundColor: skills[index].background,
      color:skills[index].textColor,
      ease: "back",
    });
  }

}
