import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SkillDescriptionData} from "./skill-description/skill-description.component";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  repeat: number[] = [0,1,2,3,4,5,6,7,8,9];
  @Input()skill!: 'HTML' | 'Angular' | 'CSS' | 'NodeJS' | 'Typescript';

  description = {
    "CSS": {
      show: false,
      data: {
        heading: "CSS | SCSS",
        subHeading: "Expertise",
        rating: 4,
        description: [
          "2+ years of Experience in Product based companies",
          "Good understanding of preprocessor such as SCSS",
          "Ability to work with Animations"
        ]
      } as SkillDescriptionData
    },
    "HTML": {
      show: false,
      data: {
        heading: "HTML 5",
        subHeading: "Expertise",
        rating: 4,
        description: [
          "2+ years of Experience in Product based companies",
          "Skilled in writing understandable markups for easy code-reading",
          "Goal is to Hack NASA with HTML skills 🤪"
        ]
      } as SkillDescriptionData
    },
    "Angular": {
      show: false,
      data: {
        heading: "Angular 2+ | AngularJS",
        subHeading: "Expertise",
        rating: 4,
        description: [
          "2 years of Experience in Product based companies",
          "Good understanding of Routing, Standalone Components, Modules",
          "Used and created custom Pipes, Services, Libraries",
          "State Management in Angular using NGXS"
        ]
      } as SkillDescriptionData
    },
    "NodeJS": {
      show: false,
      data: {

      } as SkillDescriptionData
    },
    "Typescript": {
      show: false,
      data: {

      } as SkillDescriptionData
    }
  }

  toggleDescription(skill: 'CSS' | 'HTML' | 'Typescript' | 'Angular' | 'NodeJS', show: boolean) {
    this.description[skill].show = show;
  }

}
