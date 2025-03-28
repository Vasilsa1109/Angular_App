import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThemeComponent } from './task-theme.component';

describe('TaskThemeComponent', () => {
  let component: TaskThemeComponent;
  let fixture: ComponentFixture<TaskThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
