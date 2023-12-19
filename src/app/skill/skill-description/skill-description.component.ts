import { Component, Input } from '@angular/core';

export interface SkillDescriptionData {
  heading: string,
  subHeading: string,
  rating: number,
  description: string[]
}

@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss']
})
export class SkillDescriptionComponent {
  @Input() data:any;

}
