import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDescriptionComponent } from './skill-description.component';

describe('SkillDescriptionComponent', () => {
  let component: SkillDescriptionComponent;
  let fixture: ComponentFixture<SkillDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillDescriptionComponent]
    });
    fixture = TestBed.createComponent(SkillDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
