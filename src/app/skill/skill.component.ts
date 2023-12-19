import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  repeat: number[] = [0,1,2,3,4,5,6,7,8,9];
  @Input()skill!: 'HTML' | 'Angular' | 'CSS' | 'NodeJS' | 'Typescript';

}
